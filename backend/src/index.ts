import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();


app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter)



app.use('/api/v1/blog/*', async (c, next) => {
  await next()
})




export default app

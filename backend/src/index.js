import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
const app = new Hono();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.use('/api/v1/blog/*', async (c, next) => {
    await next();
});
export default app;

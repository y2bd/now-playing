import * as Koa from "koa";
import * as Router from "koa-router";
import { listRaw, Sort } from "../reddit/listing";
import { port } from "../secret";

const app = new Koa();
const router = new Router();

router
  .get(
    "/",
    async (context: Koa.ParameterizedContext<{}, Router.IRouterContext>) => {
      context.body = "Hello world";
    }
  )
  .get(
    `/:subreddit/:sort/:after?`,
    async (context: Koa.ParameterizedContext<{}, Router.IRouterContext>) => {
      const {
        subreddit,
        sort,
        after
      }: {
        subreddit: string;
        sort: Sort;
        after?: string;
      } = context.params;

      const response = await listRaw({
        after,
        sort,
        subreddit
      });

      context.body = response;
    }
  );

app.use(async (ctx: Koa.Context, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "GET");
  ctx.set("Access-Control-Allow-Headers", "Content-Type");

  await next();
});
app.use(router.routes());

app.listen(port);
console.log("Now listening on port " + port);

export default app;

import Koa from "koa";

const app = new Koa();

app.use(async ctx => {
	ctx.body = "Hello JowayYoung";
});

app.listen(3000);
console.log("Node服务已启动，监听端口3000");
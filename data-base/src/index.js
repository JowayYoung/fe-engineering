import Koa from "koa";
import KoaBody from "koa-body";
import KoaJson from "koa-json";
import KoaLogger from "koa-logger";
import KoaOnerror from "koa-onerror";

import "./database";
import Router from "./routes";

// 创建实例
const app = new Koa();
KoaOnerror(app); // 美化错误参数
app.on("error", (err, ctx) => console.error("server error", err, ctx)); // 捕获错误

// 配置中间件
app.use(KoaLogger()); // 日志解析
app.use(KoaBody({ multipart: true })); // Body解析
app.use(KoaJson()); // JSON解析

// 匹配路由
Object.values(Router).forEach(v => app.use(v.routes(), v.allowedMethods()));

// 监听服务
app.listen(3000);
console.log("Node服务已启动，监听端口3000");
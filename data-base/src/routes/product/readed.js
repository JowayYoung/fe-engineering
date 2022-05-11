import KoaRouter from "koa-router";
import { AsyncTo } from "@yangzw/bruce-us/dist/node";

import { ProductModel } from "../../models";

const Router = KoaRouter();

Router.get("/product/readed", async ctx => {
	const { id } = ctx.request.query;
	// 校验全部字段是否为空
	if (!id) {
		ctx.body = { code: 400, msg: "产品ID不能为空" };
		return false;
	}
	// 读取产品
	const [err, res] = await AsyncTo(ProductModel.findById(id));
	if (!err && res) {
		ctx.body = { code: 200, data: res, msg: "读取产品成功" };
	} else {
		ctx.body = { code: 400, msg: "读取产品失败" };
	}
});

export default Router;
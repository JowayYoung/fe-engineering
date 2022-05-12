import KoaRouter from "koa-router";
import { AsyncTo } from "@yangzw/bruce-us/dist/node";

import { ProductModel } from "../../models";
import AppConfig from "../../app.config";

const Router = KoaRouter();

Router.post(`${AppConfig.publichPath}/product/delete`, async ctx => {
	const { id } = ctx.request.body;
	// 校验全部字段是否为空
	if (!id) {
		ctx.body = { code: 400, msg: "产品ID不能为空" };
		return false;
	}
	// 删除产品
	const [err, res] = await AsyncTo(ProductModel.findByIdAndDelete(id));
	if (!err && res) {
		ctx.body = { code: 200, data: res, msg: "删除产品成功" };
	} else {
		ctx.body = { code: 400, msg: "删除产品失败" };
	}
});

export default Router;
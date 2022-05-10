import KoaRouter from "koa-router";
import { AsyncTo } from "@yangzw/bruce-us/dist/node";

import { Product, ProductModel } from "../../models";
import { CheckData } from "../../utils/setting";

const Router = KoaRouter();

Router.post("/product/create", async ctx => {
	const params = ctx.request.body;
	// 校验全部字段是否为空
	if (!CheckData(params, 5)) {
		ctx.body = { code: 300, msg: "产品信息都不能为空" };
		return false;
	}
	// 校验全部字段是否符合正则
	const checkMsg = Object.entries(params).reduce((t, v) => {
		const { match, msg } = Product[v[0]];
		return !t && !match.test(v[1]) ? { code: 400, msg } : t;
	}, "");
	if (checkMsg) {
		ctx.body = checkMsg;
		return false;
	}
	// 判断产品是否存在
	const [err1, res1] = await AsyncTo(ProductModel.findOne({ code: params.code }));
	if (err1) {
		ctx.body = { code: 400, msg: "新增产品失败" };
		return false;
	}
	if (res1) {
		ctx.body = { code: 400, msg: "当前产品已存在" };
		return false;
	}
	// 新增产品
	const [err2, res2] = await AsyncTo(ProductModel.create(params));
	if (!err2 && res2) {
		ctx.body = { code: 200, data: res2, msg: "新增产品成功" };
	} else {
		ctx.body = { code: 400, msg: "新增产品失败" };
	}
});

export default Router;
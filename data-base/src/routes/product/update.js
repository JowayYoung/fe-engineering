import KoaRouter from "koa-router";
import { AsyncTo } from "@yangzw/bruce-us/dist/node";

import { Product, ProductModel } from "../../models";
import { CheckData } from "../../utils/setting";
import AppConfig from "../../app.config";

const Router = KoaRouter();

Router.post(`${AppConfig.publichPath}/product/update`, async ctx => {
	const { id, ...params } = ctx.request.body;
	// 校验全部字段是否为空
	if (!id) {
		ctx.body = { code: 400, msg: "产品ID不能为空" };
		return false;
	}
	if (!CheckData(params, 1)) {
		ctx.body = { code: 400, msg: "产品信息不能为空" };
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
	const [err1, res1] = await AsyncTo(ProductModel.findById(id));
	if (err1 || !res1) {
		ctx.body = { code: 400, msg: "当前产品不已存在" };
		return false;
	}
	// 更新产品
	const [err2, res2] = await AsyncTo(ProductModel.findByIdAndUpdate(id, params));
	console.log(res2);
	if (!err2 && res2) {
		ctx.body = { code: 200, data: { ...res2.toObject(), ...params }, msg: "更新产品成功" };
	} else {
		ctx.body = { code: 400, msg: "更新产品失败" };
	}
});

export default Router;
import Day from "dayjs";

export default {
	brand: {
		match: /^.{2,200}$/,
		msg: "品牌只能由2到200位任意字符组成",
		required: true,
		trim: true,
		type: String
	},
	code: {
		match: /^[A-Za-z0-9]{4,30}$/,
		msg: "条形码只能由4到30位英文或数字组成",
		required: true,
		trim: true,
		type: String
	},
	createtime: {
		default: Day().format("YYYY-MM-DD HH:mm:ss"),
		match: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
		msg: "创建日期由系统自动生成",
		required: true,
		trim: true,
		type: String
	},
	description: {
		match: /^.{2,500}$/,
		msg: "描述只能由2到500位任意字符组成",
		required: true,
		trim: true,
		type: String
	},
	name: {
		match: /^[\u4e00-\u9fa5A-Za-z\d-\s]{2,200}$/,
		msg: "名称只能由2到200位中文、英文、数字、中划线或空格组成",
		required: true,
		trim: true,
		type: String
	},
	origin: {
		match: /^[\u4e00-\u9fa5A-Za-z\d-]{2,100}$/,
		msg: "产地只能由2到100位中文、英文、数字或中划线组成",
		required: true,
		trim: true,
		type: String
	}
};
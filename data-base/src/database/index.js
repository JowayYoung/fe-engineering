import Mongoose from "mongoose";

import AppConfig from "../app.config";

const { connect, connection } = Mongoose;
const { mongodb: { host, password, port, username } } = AppConfig;

connect(`mongodb://${username}:${password}@${host}:${port}/mall`, {
	authSource: "admin",
	useNewUrlParser: true,
	useUnifiedTopology: true
});
connection.on("connected", () => console.log("数据库连接成功"));
connection.on("disconnected", () => console.log("数据库连接断开"));
connection.on("error", () => console.log("数据库连接异常"));
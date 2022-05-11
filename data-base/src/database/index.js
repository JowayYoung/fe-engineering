import Mongoose from "mongoose";

const { connect, connection } = Mongoose;
const url = "mongodb://root:123456@127.0.0.1:27017/mall";

connect(url, {
	authSource: "admin",
	useNewUrlParser: true,
	useUnifiedTopology: true
});
connection.on("connected", () => console.log("数据库连接成功"));
connection.on("disconnected", () => console.log("数据库连接断开"));
connection.on("error", () => console.log("数据库连接异常"));
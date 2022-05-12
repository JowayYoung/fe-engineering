import { env } from "process";

export default {
	mongodb: {
		host: env.NODE_ENV === "dev" ? "your server host" : "127.0.0.1",
		password: "123456",
		port: 27017,
		username: "root"
	},
	publichPath: env.NODE_ENV === "dev" ? "" : "/mall"
};
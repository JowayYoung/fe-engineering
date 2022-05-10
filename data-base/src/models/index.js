import Mongoose from "mongoose";

import Product from "./product";

const { model, Schema } = Mongoose;

const ProductModel = model("product", new Schema(Product, { versionKey: false }));

export {
	Product,
	ProductModel
};
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    "_id":String,
    "title": String,
    "sub_title": String,
    "description": String,
    "price": Number,
    "image": String

},
{ strict: false }
)

export default new mongoose.model("Product",schema,'products_col')
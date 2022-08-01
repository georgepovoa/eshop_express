import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {

    _id:{
        type:String,
        unique: true,
    },
    user:{
        type:String
    },
    produtos:{
        type:[]
    },
    
},
{ strict: false }
// {
//     timestamps:true
// }

)

export default mongoose.model("Cart",schema, "carrinho_col")
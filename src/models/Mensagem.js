import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {

    _id:{
        type:String,
        unique: true,
    },
    nome:{
        type:String
    },
    email:{
        type:String

    },
    assunto:{
        type:String
    },
    mensage:{
        type:String
    }
    
},
{ strict: false }
// {
//     timestamps:true
// }

)

export default mongoose.model("Mensagem",schema, "message_col")
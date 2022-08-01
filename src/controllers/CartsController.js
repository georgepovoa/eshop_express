import Cart from "../models/Cart.js";
import Product from "../models/Product.js"


class CartsController{

    async helloWorld(req,res){
        return res.status(200).json({hello:"world"})

    }
    async index(req,res){
        try {
            
            const carts = await Cart.aggregate([
                {
                    $lookup:{
                      from: "products_col",
                      localField: "produtos",
                      foreignField: "_id",
                      as: "produtos_abertos"
                   }
                }
            ]); 
            return res.status(200).json(carts)
        } catch (error) {
            return res.status(500).json({error:"Internal server error"})

            
        }
    }

    async indexByUser(req,res){
        try {
            const {user} = req.params
            console.log(user)
            
            const carts = await Cart.aggregate([
                {
                    $match:{"user":user}
                },
                
                {
                    $lookup:{
                      from: "products_col",
                      localField: "produtos",
                      foreignField: "_id",
                      as: "produtos_abertos"
                   },
                   
                }
            ]); 
            console.log(carts[0])
            return res.status(200).json(carts[0])
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:"Internal server error"})

            
        }
    }

    async addProductInCart(req,res){
        try{
            const {user,idProduct} = req.params
            const product = await Product.findOne({"_id":idProduct})
            if(!product){
                return res.status(404).json({"Error":"product not found"})
            }
            const cart  = await Cart.findOne({"user":user})
            for(let i=0;i<cart.produtos.length ; i++){
                if(idProduct === cart.produtos[i]){
                    return res.status(500).json({error:"Product already in cart"})

                }
            }

            await cart.updateOne({ "$push": { produtos: idProduct }})
            return res.status(200).json(cart)

        }
        catch(error){
            console.log(error)
            return res.status(500).json({error:"Internal server error"})

        }
    }

    async removeProductInCart(req,res){
        try{
            const {user,idProduct} = req.params
            const product = await Product.findOne({"_id":idProduct})
            if(!product){
                return res.status(404).json({"Error":"product not found"})
            }
            const cart  = await Cart.findOne({"user":user})

            await cart.updateOne({ "$pull": { produtos: idProduct }})
            return res.status(200).json(cart)

        }
        catch(error){
            console.log(error)
            return res.status(500).json({error:"Internal server error"})

        }
    }

    

}


export default new CartsController();
import Product from "../models/Product.js";
import { v4 as uuidv4 } from 'uuid';



class ProductController{
    async index(req,res){
        try {
            
            const products = await Product.find(); 
            return res.status(200).json(products)
        } catch (error) {
            return res.status(500).json({error:"Internal server error"})

            
        }
    }

    async create(req,res){
        try{
            var produto_recebido = req.body
            produto_recebido._id = uuidv4()
            const product = await Product.create(produto_recebido)
            console.log(product)
            return res.status(201).json(product)
        }
        catch (error) {
            return res.status(500).json({error:"internal error"})

        }
        
    }

    async update(req,res){
        try{
            const {id} = req.params;
            const product =  await Product.findById(id)
            if(!product){
                return res.status(400).json()
            }
            await product.updateOne(req.body)

            return res.status(200).json();
        }
        catch(err){
            console.log(err);
            return res.status(500).json({error:"Internal server error. "})
 
        }
    }

    async destroy(req,res){
        try{
            const {id} = req.params;
            const product = await Product.findById(id)
            if(!product){
                return res.status(404).json()
            }
            await product.deleteOne();

            return res.status(200).json();
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error:"internal server error"})
        }
    }
}


export default new ProductController();
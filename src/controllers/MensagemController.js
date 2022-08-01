import Mensagem from "../models/Mensagem";

import { v4 as uuidv4 } from 'uuid';

class MensageController {
    async index(req,res){
        try {
            
            const mensagem = await Mensagem.find(); 
            return res.status(200).json(mensagem)
        } catch (error) {
            return res.status(500).json({error:"Internal server error"})

            
        }
        
    }
    async create(req,res){
        try{
            var mensagem_recebido = req.body
            mensagem_recebido._id = uuidv4()
            const product = await Mensagem.create(mensagem_recebido)
            console.log(product)
            return res.status(201).json(product)
        }
        catch (error) {
            return res.status(500).json({error:"internal error"})

        }
        
    }
}

export default new MensageController();
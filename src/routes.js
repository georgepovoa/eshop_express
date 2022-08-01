import { Router } from "express";

import CartsController from "./controllers/CartsController.js";

import ProductController from "./controllers/ProductController.js";

import MensagemController from "./controllers/MensagemController.js";

const routes = new Router();

// routes.get("/transactions",...)


routes.get('/',CartsController.helloWorld)

routes.get('/carts',CartsController.index)

routes.get('/carrinhos/:user',CartsController.indexByUser)

routes.put('/carrinhos/add/:user/:idProduct',CartsController.addProductInCart)

routes.put('/carrinhos/remove/:user/:idProduct',CartsController.removeProductInCart)



routes.get('/produtos/all',ProductController.index)

routes.post('/products',ProductController.create)

routes.put('/products/:id',ProductController.update)

routes.delete('/products/:id',ProductController.destroy)



routes.post("/mensagem",MensagemController.create)




export default routes;
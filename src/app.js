import express from "express"

import cors from "cors"

import routes from "./routes.js";

import './database/index.js'

// import swaggerUi from "swagger-ui-express"
// import swaggerFile from "../swagger_output.json"

// const swaggerUi = require('swagger-ui-express')
// const swaggerFile = require('../swagger_output.json')

class App{
    constructor(){
        this.server = express();

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
        this.server.use(routes)

    }
}


export default new App().server;
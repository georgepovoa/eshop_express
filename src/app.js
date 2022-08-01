import express from "express"

import cors from "cors"

import routes from "./routes";

import './database'

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

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
        this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

    }
}


export default new App().server;
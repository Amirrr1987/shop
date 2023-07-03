import { log } from "console";
import express from "express";

const app = express()


export default class Application {
    port: number;
    constructor({ port }: { port: number }) {
        this.port = port
        this.configServer()
    }



    configServer() {
        app.listen(this.port, () => log(`server run on port ${this.port}`))
    }
}
import { log } from "console";
import express from "express";
import { connect } from "mongoose";

const app = express()


export default class Application {
    port: number;
    database: string;
    constructor({ port, database }: { port: number, database: string }) {
        this.port = port
        this.database = database
        this.configDatabase()
        this.configServer()
    }

    async configDatabase() {
        try {
            await connect(this.database)
            log(`database is connected`)
        }
        catch (error) {
            log(error)
        }
    }



    configServer() {
        app.listen(this.port, () => log(`server run on port ${this.port}`))
    }
}
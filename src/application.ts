import {Express} from 'express'
import * as bodyParser from 'body-parser';
import { DatabaseConfig } from "./database/DatabaseConfig";

export class Application {

    readonly _port: string;
    private _express: any;

    private get getPort(){
        return this._port
    }

    constructor(port: string, express: any){
        this._express = express;
        this._port = port;
    }

    public run() {
        const app = this._express();
        app.listen(this._port, () => {
            console.log(`Server is working on : ${this.getPort}`)
        });
     this.applicationConfig(app);
     const database = new DatabaseConfig();
     database.createTable('Tabeleczka');

    }

    private applicationConfig(app: Express){
        app.use(bodyParser.json());
    }
}



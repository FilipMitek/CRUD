import * as bodyParser from 'body-parser';
import { Express } from 'express';
import { RoutesLoader } from './routes/RoutesLoader';

export class Application {

    public readonly _port: string;
    private _express: any;
    private routesLoader: RoutesLoader;

    private get getPort() {
        return this._port;
    }

    constructor(port: string, express: any) {
        this._express = express;
        this._port = port;
        this.routesLoader = new RoutesLoader();
    }

    public run() {
        const app = this._express();
        this.applicationConfig(app);
        app.listen(this._port, () => {
            console.log(`Server is working on : ${this.getPort}`);
        });
        this.routesLoader.load(app);
    }

    private applicationConfig(app: Express) {
        app.use(bodyParser.json());
    }
}

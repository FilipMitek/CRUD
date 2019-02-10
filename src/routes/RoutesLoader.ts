import { Request, Response, NextFunction } from 'express';
import { DatabaseConfig } from '../database/DatabaseConfig';

export class RoutesLoader {
    private database: DatabaseConfig;

    constructor() {
        this.database = new DatabaseConfig();
    }

     public load(app: any) {
         app.post('/createTable', this.getMiddleware(), (req: Request, res: Response) => {
             this.database.createTable('Tabeleczka');
             res.send('Table created ! ');
         });
         app.post('/createRow', this.getMiddleware(), (req: Request, res: Response) => {
            this.database.createRow('Rekrutacja', JSON.parse(JSON.stringify(req.body)));
            console.log(JSON.parse(req.body))
            res.send(`Wstawione dane ! ${req.body}`);
            });
    }

    private getMiddleware(): (req: Request, res: Response, next?: NextFunction) => void {
        return (req: Request, res: Response, next?: NextFunction): void => {
            res.set('Content-Type', 'application/json');
            res.status(200);
            next();
        };
    }

}

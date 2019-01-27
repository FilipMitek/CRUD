import { ISQLLiteDatabase } from "./ISQLLiteDatabase";
import * as sqlite from 'sqlite3';

export class SQLLiteDatabase implements ISQLLiteDatabase{

    readonly _dbPath;

    private get dbPath(){
        return this._dbPath;
    }

    constructor(dbPath: string){
        this._dbPath = dbPath;
    }

    public async openDatabase(){
        const path = this.dbPath;
        const database = new sqlite.Database(path);
        await this.serialize(database);
        await this.closeDatabase(database);
    }

    public serialize(database: any){
        database.serialize(function() {
            database.run("CREATE TABLE lorem (info TEXT)");
        });
    }

    public closeDatabase(database: any){
        database.close();
    }
}

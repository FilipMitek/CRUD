import { ISQLLiteDatabase } from "./ISQLLiteDatabase";
export declare class SQLLiteDatabase implements ISQLLiteDatabase {
    readonly _dbPath: any;
    private readonly dbPath;
    constructor(dbPath: string);
    openDatabase(): Promise<void>;
    serialize(database: any): void;
    closeDatabase(database: any): void;
}

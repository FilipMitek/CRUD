export interface ISQLLiteDatabase {
    openDatabase(): void;
    serialize(database: any): any;
}

export interface ISQLLiteDatabase {
    openDatabase(database: any): void;
    closeDatabase(database: any): void;
    serialize(database: any);
}
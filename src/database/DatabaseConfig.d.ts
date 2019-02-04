export declare class DatabaseConfig {
    private connection;
    constructor();
    createTable(tableName: string): Promise<void>;
}

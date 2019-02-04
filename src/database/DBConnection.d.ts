export declare class DBConnection {
    private client;
    private host;
    private user;
    private password;
    private database;
    constructor(client: string, host: string, user: string, password: string, database: string);
    getKnex(): any;
    getConnection(): {
        host: string;
        user: string;
        password: string;
        database: string;
    };
}

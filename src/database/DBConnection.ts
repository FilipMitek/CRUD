import * as knex from "knex";

export class DBConnection {
    private client: string;
    private host: string;
    private user: string;
    private password: string;
    private database: string;


    constructor(client: string, host: string, user: string, password: string, database: string){
        this.client = client;
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    public getKnex(): any {
        return knex({
            client: this.client,
            connection: this.getConnection(),
        });
    }

    public getConnection(){
        return {
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
        }
    }
}
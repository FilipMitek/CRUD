import { DBConnection } from "./DBConnection";
import { DatabaseParameter } from "./DatabaseParameter";

export class DatabaseConfig {
    private connection: DBConnection;

    constructor() {
        this.connection = new DBConnection (
            DatabaseParameter.client,
            DatabaseParameter.host,
            DatabaseParameter.user,
            DatabaseParameter.password,
            DatabaseParameter.database
        );
    }

    public async createTable(tableName: string): Promise<void>{
        try{
            const knex = this.connection.getKnex();
            knex.schema.createTable(tableName, (table) => {
                table.increments();
                table.string('name');
                table.timestamps();
            }).then(() => {
                return true;
            });
        } catch (e) {
            throw new Error(e);
        }

    }
}
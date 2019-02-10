import { DatabaseParameter } from './DatabaseParameter';
import { DBConnection } from './DBConnection';

export class DatabaseConfig {
    private connection: DBConnection;

    constructor() {
        this.connection = new DBConnection (
            DatabaseParameter.client,
            DatabaseParameter.host,
            DatabaseParameter.user,
            DatabaseParameter.password,
            DatabaseParameter.database,
        );
    }

    public async createTable(tableName: string): Promise<void> {
        try {
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

    public async createRow(tableName: string, data: any): Promise<void> {
        try {
            const knex = this.connection.getKnex();
            knex(tableName).insert(data).then(() => {
                return true;
            });
            } catch (e) {
            throw new Error(e);
        }
    }

}

import * as path from 'path';
import * as express from 'express';
import { SQLLiteDatabase } from './src/SQLLIte/SQLLiteDatabase';



const app = express();
const PORT = process.env.PORT || 8080;
const pathToDb = path.resolve('database.db');
console.log(pathToDb)
const database = new SQLLiteDatabase(pathToDb);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

database.openDatabase();






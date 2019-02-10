import * as express from 'express';
import { Application } from './src/application';

const PORT = process.env.PORT || '8080';
const app = new Application(PORT, express);
app.run();

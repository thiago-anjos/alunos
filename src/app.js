import dotevn from 'dotenv';

dotevn.config();
import './database';
import express from 'express';
import { resolve } from 'path';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRouter';
import tokenRoutes from './routes/TokenRoutes';
import studentRoutes from './routes/StudentRoutes';
import photoRoutes from './routes/PhotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students', studentRoutes);
    this.app.use('/photos', photoRoutes);
  }
}

export default new App().app;

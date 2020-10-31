import dotevn from 'dotenv';

dotevn.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRouter';
import tokenRoutes from './src/routes/TokenRoutes';
import studentRoutes from './src/routes/StudentRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students', studentRoutes);
  }
}

export default new App().app;

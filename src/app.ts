import express, { Application } from 'express';
import morgan from 'morgan';
import IndexRoutes from './presentation/routes/index.routes';
import PostRoutes from './presentation/routes/post.routes';

export class App {

    private app: Application;

    constructor(private port: number) {
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
    }

    setting() {
        this.app.set('port', this.port || process.env.PORT || process || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes)
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port:', this.app.get('port'));

    }
}
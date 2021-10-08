import { Express } from 'express';
import { Method } from './method';

export class Post extends Method {
    implement(app: Express): void {
        app.post(this.fullPath, this.callback);
    }
}

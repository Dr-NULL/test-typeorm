import { Express } from 'express';
import { Method } from './method';

export class Get extends Method {
    implement(app: Express): void {
        app.get(this.fullPath, this.callback);
    }
}
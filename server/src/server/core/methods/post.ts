import { Express } from 'express';
import { Method } from '../method';

export class Post extends Method {
    use(app: Express): void {
        if (!this.path || this.callback) {
            throw new Error(
                    'primero debe de especificar un "path" y '
                +   'un "callback" para declarar un endpoint.'
            );
        }

        app.post(this.path, this.callback);
    }
}

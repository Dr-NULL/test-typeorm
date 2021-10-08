import { Express } from 'express';
import { RequestCallback } from '../interfaces';

export abstract class Method {
    private static _prefix = 'api';
    static get prefix(): string {
        return Method._prefix;
    }
    static set prefix(v: string) {
        if (v.match(/[^a-z0-9\-_]/)) {
            throw new Error(
                    'The prefix must have only letters, numbers, '
                +   '"-" or "_" characters'
            );
        }
        
        Method.prefix = v;
    }

    private _path: string;
    get path(): string {
        return this._path;
    }
    set path(v: string) {
        this._path = v.replace(/^(\\|\/)+/gi, '');
    }

    private _callback: RequestCallback;
    get callback(): RequestCallback {
        return this._callback;
    }
    set callback(v: RequestCallback) {
        this._callback = v;
    }

    get fullPath(): string {
        return `/${Method.prefix}/${this._path}`;
    }

    abstract implement(app: Express): void;

}
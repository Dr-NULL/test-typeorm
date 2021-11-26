import { Express } from 'express';
import { Callback } from './interfaces';

export abstract class Method {
    abstract use(app: Express): void;
    
    private _path : string;
    public get path() : string {
        return this._path;
    }
    public set path(v : string) {
        this._path = v;
    }

    private _callback : Callback;
    public get callback() : Callback {
        return this._callback;
    }
    public set callback(v : Callback) {
        this._callback = v;
    }
}

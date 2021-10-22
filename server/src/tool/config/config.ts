import * as fsPromises from 'fs/promises';
import { resolve } from 'path';

export abstract class Config<T> {
protected abstract default:T;

    private _path: string;
    get path(): string {
        return this._path;
    }

    constructor(path: string) {
        this._path = resolve(path);
    }

    async load(): Promise<T> {
        const byte = await fsPromises.readFile(this._path);
        const text = byte.toString('utf-8');
        return JSON.parse(text);
    }

    async save(data: T): Promise<void> {
        const text = JSON.stringify(data);
        const byte = Buffer.from(text, 'utf-8');
        return fsPromises.writeFile(this._path, byte);
    }

    async exists(): Promise<boolean> {
        try {
            await fsPromises.access(this._path);
            return true;
        } catch {
            return false;
        }
    }

    async kill(): Promise<void> {
        return fsPromises.rm(this._path);
    }
}
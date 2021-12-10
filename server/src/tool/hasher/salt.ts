import { access, readFile, writeFile, rm } from 'fs/promises';
import { randomBytes } from 'crypto';
import { resolve } from 'path';

export class Salt {
    private _path: string;
    get path(): string {
        return this._path;
    }

    constructor(path: string) {
        this._path = resolve(path);
    }

    async exists(): Promise<boolean> {
        try {
            await access(this._path);
            return true;
        } catch {
            return false;
        }
    }

    load(): Promise<Buffer> {
        return readFile(this._path);
    }

    kill(): Promise<void> {
        return rm(this._path);
    }

    async generate(length: number): Promise<Buffer> {
        const salt = randomBytes(length);
        await writeFile(this._path, salt);
        return salt;
    }
}
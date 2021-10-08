import { OrmConfigData } from './interfaces';
import { Config } from './config';

export class OrmConfig extends Config<OrmConfigData | OrmConfigData[]> {
    constructor(path?: string) {
        super(path ??'./ormconfig.json');
    }
}

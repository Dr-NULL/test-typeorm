import { AppConfigData } from './interfaces';
import { Config } from './config';

export class AppConfig extends Config<AppConfigData> {
    constructor(path?: string) {
        super(path ??'./appconfig.json');
    }
}
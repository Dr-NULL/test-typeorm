import { AppConfigData } from './interfaces';
import { Config } from './config';

export class AppConfig extends Config<AppConfigData> {
    protected default: AppConfigData={
        port :80,
        paths:{
            client:'../client',
            sessions:'../data/sessions'
        }
    };
    constructor(path?: string) {
        super(path ??'./appconfig.json');
    }
}
import { OrmConfig } from '@tool/config';

export class SetupCommand {
    async start(): Promise<void> {
        console.log('Preparando entorno de ejecución...');
        const ormConf = new OrmConfig();
        const ormExists = await ormConf.exists();

        if (!ormExists) {
        }
    }
}
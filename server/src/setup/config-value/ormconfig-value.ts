import { OrmConfigData } from '@tool/config';

export const ormConfigValue: OrmConfigData = {
    type: 'mssql',
    port: 1433,
    host: '-- IP Here --',
    username: '-- DB Username here --',
    password: '-- DB Password here --',
    database: '-- DB name here --',
    logging: false,
    syncronize: false,
    entities: [
        './src/entities/*.entity.ts',
    ],
    migrations: [
        './src/migrations/**.ts',
    ],
    cli: {
        entitiesDir: './src/entities',
        migrationsDir: './src/migrations',
    },
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};
export interface OrmConfigData {
    type: string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    syncronize: boolean,
    logging: boolean,
    timezone?: string,
    entities: string[],
    migrations: string[],
    cli?: {
        entitiesDir: string;
        migrationsDir: string;
    },
    options?: {
        useUTC?: boolean,
        encrypt?: boolean,
        enableArithAbort?: boolean
    }
}

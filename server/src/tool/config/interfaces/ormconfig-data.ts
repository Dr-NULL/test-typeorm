export interface OrmConfigData {
    type: "mssql",
    host: "192.168.20.158",
    port: 1433,
    username: "sa",
    password: "DB.2021!",
    database: "SYS_EXPORT_TEST",
    syncronize: false,
    logging: false,
    timezone: "Z",
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

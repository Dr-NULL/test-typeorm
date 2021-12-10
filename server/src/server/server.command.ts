import { Command, CommandMethod } from '@bleed-believer/command';
import { createConnection } from 'typeorm';
import express from 'express';

import { AppConfig } from '@tool/config';
import { endpoints } from './endpoints';

@Command({
    main: 'server',
    title: 'API REST'
})
export class ServerCommand {
    @CommandMethod()
    async start(): Promise<void> {
        console.log('Conectando con DB...');
        const orm = await createConnection();

        process.on('SIGINT', async () => {
            console.log('Cerrando conexión con DB...');
            await orm.close();
            process.exit();
        });

        console.log('Inicio de la API Rest...');
        const appConfig = await new AppConfig().load();
        const app = express();

        // Levantamos nuestros endpoints
        for (const endpoint of endpoints) {
            endpoint.use(app);
        }

        // Escuchar el evento de conexión establecida
        app.listen(appConfig.port, () => {
            console.log('Connection established successfully.\n');
        });
    }
}

import { Command, CommandMethod } from '@bleed-believer/command';
import express from 'express';

import { AppConfig } from '@tool/config';

@Command({
    main: 'server',
    title: 'API REST'
})
export class ServerCommand {
    @CommandMethod()
    async start(): Promise<void> {
        console.log('Inicio de la API Rest...');
        const appConfig = await new AppConfig().load();
        const app = express();

        app.listen(appConfig.port, () => {
            console.log('Connection established successfully.\n');
        });
    }
}

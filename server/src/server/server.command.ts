import { Command, CommandMethod } from '@bleed-believer/command';
import express from 'express';

@Command({
    main: 'server',
    title: 'API REST'
})
export class ServerCommand {
    @CommandMethod()
    start(): void {
        console.log('Inicio de la API Rest...');


        const app = express();
        app.use()
    }
}

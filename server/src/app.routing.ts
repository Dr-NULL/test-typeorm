import { CommandRouter } from '@bleed-believer/command';
import { BleedModule } from '@bleed-believer/core';

import { ServerCommand } from './server';
import { SeedsCommand } from './seeds';

@BleedModule({
    imports: [
        CommandRouter.addToRouter({
            commands: [
                ServerCommand,
                SeedsCommand
            ],
            before: () => {
                console.clear();
                console.log('>> Gestor de usuarios v0.0.1.-');
                console.log('-----------------------------------\n');
            },
            error: err => {
                console.log('ERROR:', err.message);
            }
        })
    ]
})
export class AppRouting { }
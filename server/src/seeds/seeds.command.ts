import { Command, CommandMethod } from '@bleed-believer/command';
import { createConnection, getManager } from 'typeorm';

import { seedsQueue } from './seeds-queue';

@Command({
    main: 'seeds',
    title: 'DB Seeder loader'
})
export class SeedsCommand {
    @CommandMethod()
    async start(): Promise<void> {
        // levantar una conexión a DB
        console.log('Loading seeds...\n');
        const orm = await createConnection();

        // Ejecutar una transacción
        await getManager().transaction(
            'SERIALIZABLE',             // El tipo de transacción a ejecutar
            async transact => {         // Función que se ejecutará dentro del ámbito de la transacción

                // Iterar el array de funciones
                for (const func of seedsQueue) {
                    console.log(`Launch "${func.name}();"`);

                    // Lanzar función asíncrona
                    await func(transact);
                }
            }
        );

        // Cerrar conexión
        await orm.close();
        console.log();
        console.log('Process finished!');
    }
}

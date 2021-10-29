import { Command, CommandMethod } from '@bleed-believer/command';
import { AppConfig, OrmConfig } from '@tool/config';
import { appConfigValue, ormConfigValue } from './config-value';

@Command({
    title: 'Setup Server',
    main: 'setup'
})
export class SetupCommand {
    @CommandMethod()
    async start(): Promise<void> {
        console.log('Preparando entorno de ejecución...');
        
        try {
            const appConfig = new AppConfig();
            const appExists = await appConfig.exists();
            if (!appExists) {
                process.stdout.write('-> Creando "appconfig.json"...');
                console.log(' OK!');
            } else {
                console.log('-> "appconfig.json" encontrado.');
            }
            
            const ormConfig = new OrmConfig();
            const ormExists = await ormConfig.exists();
            if (!ormExists) {
                process.stdout.write('-> Creando "ormconfig.json"...');
                await ormConfig.save(ormConfigValue);
                console.log(' OK!');
            } else {
                console.log('-> "ormconfig.json" encontrado.');
            }
    
            console.log('\nConfiguración completada!');
        } catch (err: any) {
            console.log(' ERROR!\n');

            console.log('Detalles:');
            console.log(err.message);
            console.log('\nConfiguración fallida...');
        }
    }
}
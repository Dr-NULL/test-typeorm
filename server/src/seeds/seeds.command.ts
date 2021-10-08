import { Command, CommandMethod } from '@bleed-believer/command';

@Command({
    main: 'seeds',
    title: 'DB Seeder loader'
})
export class SeedsCommand {
    @CommandMethod()
    start(): void {
        console.log('Loading seeds');
    }
}

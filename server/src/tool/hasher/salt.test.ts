import { Salt } from './salt';

describe.only('Testing "./tool/hasher/salt"', () => {
    it('Generar un archivo con data aleatoria', async () => {
        const salt = new Salt('./secret.argon2');
        const byte = await salt.generate(16);
        console.log(`Buffer:`, byte);
    });
});

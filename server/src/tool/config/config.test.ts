import { assert } from 'chai';
import { Config } from './config';

interface DummyConfigData {
    text: string;
    value: number;
}

class DummyConfig extends Config<DummyConfigData> {
    constructor() {
        super('./dummyconfig.json');
    }
}

describe('Testing "./tool/config', () => {
    const dummy = new DummyConfig();
    it('The dummy file should not exist', async () => {
        const exists = await dummy.exists();
        assert.isFalse(exists);
    });

    it('Create a new file', async () => {
        await dummy.save({
            text: 'jajajá',
            value: 123456
        });

        const exists = await dummy.exists();
        assert.isTrue(exists);
    });

    it('Checking the values inside the file', async () => {
        const data = await dummy.load();
        assert.strictEqual(data.text, 'jajajá');
        assert.strictEqual(data.value, 123456);
    });

    it('Delete the file', async () => {
        await dummy.kill();
        const exists = await dummy.exists();
        assert.isFalse(exists);
    });
});

import { EntityManager } from 'typeorm';
import { TypeUser } from '@entities/type-user.entity';

export async function loadTypeUser(transact: EntityManager): Promise<void> {
    const quantity = await transact.count(TypeUser);
    if (quantity > 0) {
        console.info('This table has entities inside, skiping...');
        return;
    }

    const system = new TypeUser();
    system.code = 'SYSTEM';
    system.descript = 'Este es el usuario root del sistema';
    await transact.save(system);

    const admin = new TypeUser();
    admin.code = 'ADMIN';
    admin.descript = 'Estos son los usuarios que administran el sistema';
    await transact.save(admin);

    const user = new TypeUser();
    user.code = 'USER';
    user.descript = 'Este usuario simplemente puede utilizar el sistema';
    await transact.save(user);
}

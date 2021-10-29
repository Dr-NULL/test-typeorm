import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeUser } from './type-user.entity';

@Entity({ name: 'User' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 20 })
    nick: string;

    @Column({ type: 'varchar', length: 30 })
    pass: string;

    @ManyToOne(() => TypeUser, ref => ref.users)
    typeUser: TypeUser;
}

import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'TypeUser' })
export class TypeUser extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 15 })
    code: string;

    @Column({ type: 'varchar', length: 50 })
    descript: string;

    @OneToMany(() => User, ref => ref.typeUser)
    users: User[];
}

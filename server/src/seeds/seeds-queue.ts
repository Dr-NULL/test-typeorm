import { EntityManager } from 'typeorm';

import { loadTypeUser } from './data/load-type-user';

export const seedsQueue: ((t: EntityManager) => Promise<void>)[] = [
    loadTypeUser,
];
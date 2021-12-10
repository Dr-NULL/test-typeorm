import { Get } from '@server/core';

import { TypeUser } from '@entities/type-user.entity';

export const typeUserGet = new Get();
typeUserGet.path = '/type-user/get';
typeUserGet.callback = async (req, res) => {
    const data = await TypeUser.find();
    res.json(data);
};

import { Request, Response } from 'express';

export type RequestCallback = (
    req: Request,
    res: Response,
) => void | Promise<void>;
import { Request, Response } from 'express';

export async function indexWelcome(req: Request, res: Response): Promise<void> {
    res.json({ msg: 'welcome to simple rest' });
}
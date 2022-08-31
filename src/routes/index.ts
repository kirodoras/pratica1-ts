import { Router, Request, Response } from 'express';
import BattleRouter from './battle.router.js';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Online");
});
router.use(BattleRouter);
export default router;
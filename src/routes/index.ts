import { Router, Request, Response } from 'express';
import BattleRouter from './battle.router.js';
import RankingRouter from './ranking.router.js';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Online");
});
router.use(BattleRouter);
router.use(RankingRouter);
export default router;
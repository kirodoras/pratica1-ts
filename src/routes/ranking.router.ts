import { Router } from 'express';
import * as RankingController from '../controllers/ranking.controller.js';
const RankingRouter = Router();

RankingRouter.get("/ranking", RankingController.getRanking);

export default RankingRouter;
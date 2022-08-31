import { Router } from 'express';
import * as BattleController from '../controllers/battle.controller.js';
const BattleRouter = Router();

BattleRouter.post("/battle", BattleController.compareUserStars);

export default BattleRouter;
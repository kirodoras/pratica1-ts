import { Request, Response } from "express";
import * as RankingRepository from '../repositories/ranking.repository.js';

export async function getRanking(req: Request, res: Response) {
    const fighters = await RankingRepository.select();
    res.status(200).send({fighters});
}
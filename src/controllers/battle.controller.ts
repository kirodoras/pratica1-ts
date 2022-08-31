import { Request, Response } from "express";
import battleSchema from "../schemas/battle.schema.js";
import * as BattleService from "../services/battleService.js";

export async function compareUserStars(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;
  const { error } = battleSchema.validate({ firstUser, secondUser });
  if (error) {
    return res.status(422).send("Preencha todos os campos corretamente");
  }
  const result = await BattleService.compareUserStars(firstUser, secondUser);
  console.log(result);
  res.status(200).send("OK");
}

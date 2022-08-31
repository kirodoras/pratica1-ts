import axios from "axios";
import * as BattleRepository from "../repositories/battle.repository.js";

export async function compareUserStars(firstUser: string, secondUser: string) {
  const firstUserStars = await getStars(firstUser);
  const secondUserStars = await getStars(secondUser);

  let winner: string | null = null;
  let loser: string | null = null;
  let draw: boolean = false;

  if (firstUserStars > secondUserStars) {
    winner = firstUser;
    loser = secondUser;
    await BattleRepository.insert(firstUser, 1, 0, 0);
    await BattleRepository.insert(secondUser, 0, 1, 0);
  }
  if (firstUserStars < secondUserStars) {
    winner = secondUser;
    loser = firstUser;
    await BattleRepository.insert(firstUser, 0, 1, 0);
    await BattleRepository.insert(secondUser, 1, 0, 0);
  }
  if(firstUserStars === secondUserStars) {
    draw = true;
    await BattleRepository.insert(firstUser, 0, 0, 1);
    await BattleRepository.insert(secondUser, 0, 0, 1);
  }

  const result = {
    winner,
    loser,
    draw
  }

  return result;
}

export async function getStars(user: string) {
  const response = await axios.get(
    `https://api.github.com/users/${user}/repos`
  );
  if (response.status === 404) {
    throw { message: `User not found`, type: "not_found" };
  }
  const arrayOfStars = response.data.map((repo: any) => repo.stargazers_count);
  const stargazers = arrayOfStars.reduce((a: number, b: number) => a + b, 0);
  return stargazers;
}

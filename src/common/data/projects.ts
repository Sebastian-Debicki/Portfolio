import { Project } from '../models/Project';

import { dragonSlayer } from './projects/dragon-slayer';
import { hangmanGame } from './projects/hangnan-game';
import { portfolio } from './projects/portfolio';
import { recipes } from './projects/recipes';
import { shop } from './projects/shop';

export const projects: Project[] = [
  dragonSlayer,
  shop,
  recipes,
  portfolio,
  hangmanGame,
];

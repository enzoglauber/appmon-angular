import { Attack } from './attack.model';
import { Weakness } from './weakness.model';

export interface Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: Array<string>;
  supertype: string;
  subtype: string;
  hp: string;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  text: Array<string>;
  attacks: Array<Attack>;
  weaknesses: Array<Weakness>;
}

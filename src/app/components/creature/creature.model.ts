import { Ability } from "../ability/ability.model";

export class Creature {
  name: string;
  size: string;
  ac: number;
  hp: number;
  speed: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

  resist: string;
  immune: string;
  vulnerable: string;
  conditionImmune: string;
  senses: string;
  passive: string;

  cr: number;

  trait: Ability[] = [];
  action: Ability[] = [];
}

export class ExportFile {
  compendium: Compendium = new Compendium();
}

export class Compendium {
  // Exported as an xml attribute.
  _version: string = "5";

  monster: Creature;
}

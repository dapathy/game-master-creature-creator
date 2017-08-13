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
}

export class ExportFile {
  compendium: Compendium = new Compendium();
}

export class Compendium {
  // Exported as an xml attribute.
  _version: string = "5";

  monster: Creature;
}

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

  // Exported XML will need to flatten these properties.
  traits: Ability[];
  actions: Ability[];
}

export class ExportFile {
  compendium: Compendium = new Compendium();
}

export class Compendium {
  // Exported as an xml attribute.
  _version: string = "5";

  monster: Creature;
}

export class Ability {
  name: string;
  text: string;
}

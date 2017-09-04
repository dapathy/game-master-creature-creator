import { Component, Input } from '@angular/core';

import { Ability } from "./ability.model";

@Component({
  selector: 'ae-abilities',
  templateUrl: 'ability.component.html'
})

export class AbilityComponent {
  @Input() abilities: Ability[];

  public newAbility = new Ability();

  public remove(index: number): void {
    this.abilities.splice(index, 1);
  }

  public add(): void {
    this.abilities.push(this.newAbility);
    this.newAbility = new Ability();
  }
}

import { Component, Input } from '@angular/core';

import { Ability } from "../creature/creature.model";

@Component({
  selector: '[ae-ability]',
  templateUrl: 'ability.component.html'
})

export class AbilityComponent {
  @Input() ability: Ability;

  public remove() {

  }
}

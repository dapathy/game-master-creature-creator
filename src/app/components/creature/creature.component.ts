import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from "electron";
import * as X2JS from "x2js";

import { Creature } from "./creature.model";

@Component({
  selector: 'ae-creature',
  templateUrl: 'creature.component.html'
})

export class CreatureComponent {
  public creature = new Creature();

  public onSubmit() {
    let serializer = new X2JS();
    let xml = serializer.js2xml(this.creature);
    ipcRenderer.send("writeToFile", xml.toString());
  }
}

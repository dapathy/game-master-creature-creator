import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from "electron";
import * as X2JS from "x2js";
import * as Beautify from "vkbeautify";

import { Creature, ExportFile } from "./creature.model";

@Component({
  selector: 'ae-creature',
  styleUrls: ['creature.component.scss'],
  templateUrl: 'creature.component.html'
})

export class CreatureComponent {
  public creature = new Creature();

  public onSubmit() {
    let file = new ExportFile();
    file.compendium.monster = this.creature;

    let serializer = new X2JS();
    let xml = serializer.js2xml(file).toString();
    let prettyXml = Beautify.xml(xml);
    ipcRenderer.send("writeToFile", prettyXml);
  }
}

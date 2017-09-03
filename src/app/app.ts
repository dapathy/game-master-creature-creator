import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
 * Angular Modules
 */
import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Import our child components
 */
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app.component';
import { CreatureComponent } from "./components/creature/creature.component";
import {AbilityComponent} from "./components/ability/ability.component";

/**
 * Import material UI Components
 */
import { MdButtonModule, MdSlideToggleModule, MdInputModule } from '@angular/material';

import { routes } from './app.routes';


/*
 * provide('AppStore', { useValue: appStore }),
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdSlideToggleModule,
        MdInputModule,
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    declarations: [AppComponent, HomeComponent, CreatureComponent, AbilityComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

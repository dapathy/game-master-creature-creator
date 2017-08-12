/**
 * Import decorators and services from angular
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'ae-app', // <app></app>
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div>
        <main>
            <router-outlet></router-outlet>
        </main>
    </div>
    `
})
export class AppComponent {

}

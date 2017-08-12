/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Allow us to use Notification API here.
declare var Notification: any;

@Component({
  selector: 'ae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name: string;

  messageForm = new FormGroup({
    messageText: new FormControl('Angular2'),
  });

  doNotify() {
    let message = {
      title: "Content-Image Notification",
      body: "Short message plus a custom content image",
    };
    new Notification(message.title, message);
  }
}

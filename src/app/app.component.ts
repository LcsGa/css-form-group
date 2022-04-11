import { Component } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  error: FormControl;
  constructor() {
    this.error = new FormControl('hello', Validators.email);
    this.error.markAsTouched();
  }
}

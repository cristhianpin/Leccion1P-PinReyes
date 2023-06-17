import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor( private router: Router) {
    this.username = '';
    this.password = '';
  }

  login() {

    this.router.navigate(['../registro']); // Navegar a la página de inicio


  }
}




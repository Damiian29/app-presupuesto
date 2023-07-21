import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username == 'Dami' && this.password == '1234') {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

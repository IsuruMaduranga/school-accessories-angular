import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/shared/models/LoginRequest';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  login() {
    const loginReq: LoginRequest = new LoginRequest(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    this.userService.login(loginReq).subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
      } else {
        alert("Server Error!");
      }
    }, e => {
      if (e.error instanceof ProgressEvent) {
        console.log(e);
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }


}

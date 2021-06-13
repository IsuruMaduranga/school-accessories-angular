import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      password1: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
    // },{ validators: this.confirmPasswordValidator })
  }

  register() {
    const regReq: RegisterRequest = new RegisterRequest(
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.username
    );

    this.userService.register(regReq).subscribe(res => {
      console.log(res);
    }, e => {
      if (e.error instanceof ProgressEvent) {
        alert('An error occurred!');
      } else {
        alert(e.error.message);
      }
    });
  }

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const p1 = control.get('password');
    const p2 = control.get('password1');
  
    return (p1!=p2) ? { confirmPassword: true } : null;
  };

}

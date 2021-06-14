import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService,private router:Router) { }

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
      Swal.fire({
        title: 'Successfully Registered!',
        text: 'Please Log In',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      })
    }, e => {
      if (e.error instanceof ProgressEvent) {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
          }
        })
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
          }
        })
      }
    });
  }

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const p1 = control.get('password');
    const p2 = control.get('password1');
  
    return (p1!=p2) ? { confirmPassword: true } : null;
  };

}

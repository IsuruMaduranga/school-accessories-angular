import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:boolean = false;
  admin:boolean = false;
  none:boolean = true;
  name:String;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.name=this.userService.name;
    if(this.userService.type=="USER"){
      this.user=true;
      this.none=false;
    }else if(this.userService.type=="ADMIN"){
      this.admin=true;
      this.none=false;
    }
  }

  logout(){
    localStorage.removeItem("token");

    Swal.fire({
      title: 'You are logged out',
      icon: 'warning',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
      } 
    })
  }
}

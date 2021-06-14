import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  dataSource:any;

  currentUser:String;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users().subscribe(res=>{
      this.dataSource = res;
      console.log(res);
    });

    this.currentUser = this.userService.email;
  }

  onChange(user:any){

    let newType:String;

    if(user.user_type=="ADMIN"){
      newType="USER"
    }else{
      newType="ADMIN"
    }

    this.userService.change(
      {
        user_id:user.user_id,
        user_type:newType,
        email:user.email,
        username:user.username
      }
    ).subscribe(res=>{
      Swal.fire({
        title: 'Done',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
        }
      })
      this.ngOnInit();
    },e=>{
      Swal.fire({
        title: 'Error',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
        }
      })
      this.ngOnInit();
    });
  }

}

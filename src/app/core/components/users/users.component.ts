import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  dataSource:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users().subscribe(res=>{
      this.dataSource = res;
      console.log(res);
    });
  }

}

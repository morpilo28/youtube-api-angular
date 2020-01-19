import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/userModel";
import {UsersService} from "../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: UserModel = {userId: null, userName: '', password: ''};
  note: string = '';

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitForm(){
    this.usersService.postUser(this.user).subscribe(res=>{
      console.log(res);
    });
    this.router.navigate(['/login']);
  }
}

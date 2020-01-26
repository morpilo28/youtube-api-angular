import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersAreaService } from "../../services/members-area/members-area.service";
import { UserModel } from "../../models/userModel";
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private user: UserModel = { userId: null, userName: '', password: '' };
  note: string = '';

  constructor(private router: Router, private usersService: UsersService, private membersAreaService: MembersAreaService) {

  }

  ngOnInit() {
  }

  onSubmitForm() {
    this.usersService.userLoginValidation(this.user).subscribe(
      userLogged => {
        window.localStorage.setItem('user', JSON.stringify(userLogged));
        this.setAndRoute(userLogged, true, '/youtube-search');
        console.log(userLogged.token);
      },
      err => {
        this.note = `user not found`;
        this.user.userName = '';
        this.user.password = '';
        window.localStorage.clear();
        this.setAndRoute({ userId: null, userIp: '', token: '' }, false, '/login');
      });
  }

  setAndRoute(userLogged, isLogged, navigateTo) {
    this.membersAreaService.setCurrentUser(userLogged);
    this.membersAreaService.setIsUserLogged(isLogged);
    this.router.navigate([navigateTo]);
  }
}

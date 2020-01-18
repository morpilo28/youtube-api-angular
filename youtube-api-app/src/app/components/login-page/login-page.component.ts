import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MembersAreaService} from "../../services/members-area/members-area.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private user: User = {userName: '', password: '', userId: null};
  note: string = '';

  constructor(private router: Router, private membersAreaService: MembersAreaService) {

  }

  ngOnInit() {
  }

  onSubmitForm() {
    this.membersAreaService.validateUser(this.user).subscribe(isLoginSuccessful => {
      if (isLoginSuccessful) {
        this.router.navigate(['/youtube-search']);
      } else {
        this.note = `user not found`;
        this.user.userName = '';
        this.user.password = '';
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    private user: { userName: string, password: string } = { userName: '', password: '' }

    constructor() {
        
     }

    ngOnInit() {
    }

    onSubmitForm() {
        console.log(this.user.userName + ', ' + this.user.password);
    }
}

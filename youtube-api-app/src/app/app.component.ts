import { Component } from '@angular/core';
import { MembersAreaService } from './services/members-area/members-area.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private membersAreaService:MembersAreaService) { }

  ngOnInit() {
    const userFromLocalStorage = JSON.parse(window.localStorage.getItem('user'));
    if(userFromLocalStorage){
      this.membersAreaService.setIsUserLogged(true);
      this.membersAreaService.setCurrentUser(userFromLocalStorage);
    }else{
      this.membersAreaService.setIsUserLogged(false);
    }
  }

  onLogout(){
    window.localStorage.clear();
  }

}
import { Injectable } from '@angular/core';
import { UserModel } from "../../models/userModel";
import { Observable, of } from "rxjs";
import { UsersService } from "../users/users.service";

@Injectable({
  providedIn: 'root'
})
export class MembersAreaService {
  private isUserLogged: boolean;
  private allUsers: UserModel[] = [];
  private currentUser: UserModel = { userId: null, userName: '', password: '' };

  constructor(private usersService: UsersService) {
    this.isUserLogged = false;
  }
  
  setIsUserLogged(isUserLogged) {
    this.isUserLogged = isUserLogged;
  }
  getIsUserLogged(): boolean {
    return this.isUserLogged;
  }

  setCurrentUser(currentUser) {
    this.currentUser = currentUser;
  }

  getCurrentUser(): UserModel {
    return this.currentUser;
  }
}

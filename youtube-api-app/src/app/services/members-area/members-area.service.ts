import { Injectable } from '@angular/core';
import { UserModel } from "../../models/userModel";
import { UserModelFromService } from 'src/app/models/user-model-from-service';

@Injectable({
  providedIn: 'root'
})
export class MembersAreaService {
  private isUserLogged: boolean;
  private allUsers: UserModel[] = [];
  private currentUser: UserModelFromService = { userId: null, userName: '', token:'' };

  constructor() {
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

  getCurrentUser(): UserModelFromService {
    return this.currentUser;
  }
}

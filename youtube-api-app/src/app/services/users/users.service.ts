import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { UserModel } from "../../models/userModel";
import { ViewingHistoryModel } from "../../models/viewing-history-model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: UserModel[] = [];
  private id: number;
  private viewingHistory: ViewingHistoryModel[] = [];

  constructor(private httpClient: HttpClient) {
    this.id = 0;
  }

  registerUser(user): Observable<UserModel> {
    const userToAdd: UserModel = {
      userId: this.id++,
      userName: user.userName,
      password: user.password
    }
    // this.users.push(userToAdd);
    /* .subscribe((res)=>{
      this.users = res;
    }); */
    return this.httpClient.post<UserModel>(`${environment.serverUri}/register`, userToAdd);
  }

  userLoginValidation(user: UserModel): Observable <UserModel> {
    //return this.users;
    return this.httpClient.post<UserModel>(`${environment.serverUri}/login`, user);
  }

  getSingleUser(id): UserModel {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId === id) {
        return this.users[i];
      }
    }
    // this.httpClient.get<User>('/user');
  }

  addUserAndVideoId(userId, videoId) {
    // this.httpClient.get<connectionTable>('/user');
    const objToAdd: ViewingHistoryModel = { userId: userId, videoId: videoId }
    this.viewingHistory.push(objToAdd);
    console.log(this.viewingHistory);
  }

}




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YouTubeList } from 'src/app/models/you-tube-list';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  apiKey: string = 'AIzaSyAEusu_4PwMPkU9F4E10B83tk08DycNPBU';

  constructor(public http: HttpClient) { }

  getVideosForChanel(query, maxResults): Observable<YouTubeList> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + query + '&part=snippet&type=video,id&maxResults=' + maxResults

    return this.http.get<YouTubeList>(url);
  }
}

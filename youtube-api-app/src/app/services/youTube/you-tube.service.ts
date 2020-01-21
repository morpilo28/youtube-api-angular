import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YouTubeListModel } from 'src/app/models/you-tube-list';
import { environment } from 'src/environments/environment';
import { YouTubeUrlBuilder } from 'src/app/builder/youtubeUrlBuilder';
import { MostWatchedModel } from 'src/app/models/most-watched';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  constructor(public httpClient: HttpClient) {
   }
/* 
  setPlaylist(playlist) {
    this._playlist = playlist;
  }

  getPlaylist() {
    return this._playlist;
  } */

  getVideosForPlaylist(query): Observable<YouTubeListModel> {
    // fetch data from local data  
    const youTubeUrl = new YouTubeUrlBuilder(environment.apiKey, environment.youTubeBaseUrl);
    youTubeUrl.addPart('snippet');
    youTubeUrl.addQueryForSearch(query);
    youTubeUrl.addType('video');
    //return this.httpClient.get<YouTubeListModel>(youTubeUrl.toString()); 
    return this.httpClient.get<YouTubeListModel>(environment.youTubeBaseUrl + "/assets/youTubeList.json");
  }

  /* getTop5WatchedVideosByUser(videosId: string): Observable<MostWatchedModel> {
    //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[YOUR_API_KEY];
    const youTubeUrl = new YouTubeUrlBuilder(environment.apiKey, environment.UserMostWatchedVideosBaseUrl);
    youTubeUrl.addPart('snippet');
    //youTubeUrl.addVideosId(videosId);
    console.log(youTubeUrl.toString());
    debugger
    return this.httpClient.get<MostWatchedModel>(environment.UserMostWatchedVideosBaseUrl + "/assets/mostWatched.json");
    //return this.httpClient.get<mostWatchedModel>(youTubeUrl.toString()); 
  } */
}

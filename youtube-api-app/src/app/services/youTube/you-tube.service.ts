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

  getVideosForPlaylist(query): Observable<YouTubeListModel> {
    const youTubeUrl = new YouTubeUrlBuilder(environment.apiKey, environment.youTubeBaseUrl+'/search');
    youTubeUrl.addPart('snippet');
    youTubeUrl.addQueryForSearch(query);
    youTubeUrl.addType('video');

    // fetch data from local data  
    //return this.httpClient.get<YouTubeListModel>(environment.youTubeBaseUrl + "/assets/youTubeList.json");

    // fetch data from youtube api
    return this.httpClient.get<YouTubeListModel>(youTubeUrl.toString()); // when going to youTube api
  }

  getTop5WatchedVideosByUser(videosId: string): Observable<MostWatchedModel> {
    //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[YOUR_API_KEY];
    const youTubeUrl = new YouTubeUrlBuilder(environment.apiKey, environment.youTubeBaseUrl+'/videos');
    youTubeUrl.addPart('snippet');
    youTubeUrl.addVideosId(videosId);

    // fetch data from local data  
    //return this.httpClient.get<MostWatchedModel>(environment.UserMostWatchedVideosBaseUrl + "/assets/mostWatched.json");

    // fetch data from youtube api
    return this.httpClient.get<MostWatchedModel>(youTubeUrl.toString());  // when going to youTube api
  }
}

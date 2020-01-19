import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YouTubeListModel } from 'src/app/models/you-tube-list';
import { environment } from 'src/environments/environment';
/* import { YouTubeUrlBuilder } from 'src/app/builder/youtubeUrlBuilder'; */

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  constructor(public httpClient: HttpClient) { }

  getVideosForPlaylist(query): Observable<YouTubeListModel> {
   // fetch data from local data  
    return this.httpClient.get<YouTubeListModel>(environment.youtubeBaseUrl+"/assets/youTubeList.json"); 
  }


/* 
  getVideosForPlaylist(query): Observable<YouTubeListModel> {
    const youTubeUrl = new YouTubeUrlBuilder(environment.apiKey, environment.youtubeBaseUrl);
    youTubeUrl.addPart('snippet');
    youTubeUrl.addQueryForSearch(query);
    youTubeUrl.addType('video');
  
    return this.httpClient.get<YouTubeListModel>(youTubeUrl.toString()); 
  }
*/


}

import { Component, OnInit } from '@angular/core';
import { YouTubeItem } from 'src/app/models/you-tube-list';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    private playlist: YouTubeItem[] = []
    private videoId: string;
    constructor() { }
  
    ngOnInit() {
  
    }
  
    onSearchGetPlaylist(playlist: YouTubeItem[]) {
      this.playlist = playlist;
    }
  
    onShowVideo(videoId: string) {
      this.videoId = videoId;
    }
}

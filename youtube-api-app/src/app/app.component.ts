import { Component } from '@angular/core';
import { YouTubeItem, YouTubeId } from './models/you-tube-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
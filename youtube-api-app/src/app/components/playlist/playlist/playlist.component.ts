import { Component, OnInit } from '@angular/core';
import { YouTubeService } from 'src/app/services/youTube/you-tube.service';
import { Item } from 'src/app/models/you-tube-list';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  videos: Item[];
  youtubeMainUrl = 'https://www.youtube.com/watch?v=';

  constructor(/* private spinner: NgxSpinnerService, */ private youTubeService: YouTubeService) { }

  ngOnInit() {
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('babies', 2).subscribe(list => {
        console.log(list);
        for (let item of list["items"]) {
          this.videos.push(item)
        }
      });
  }
}

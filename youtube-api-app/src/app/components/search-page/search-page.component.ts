import { Component, OnInit } from '@angular/core';
import { YouTubeItem } from 'src/app/models/you-tube-list';
import { UserModel } from 'src/app/models/userModel';
import { MembersAreaService } from 'src/app/services/members-area/members-area.service';
import { UsersService } from 'src/app/services/users/users.service';
import { YouTubeService } from 'src/app/services/youTube/you-tube.service';
import { Top5YouTubeItem } from 'src/app/models/most-watched';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private playlist = []; // TODO: set variable to be one of two types. for example: Top5YouTubeItem[] || YouTubeItem[]
  private videoId: string;
  private currentUser: UserModel;


  constructor(private membersAreaService: MembersAreaService, private usersService: UsersService, private youTubeService: YouTubeService) { }

  ngOnInit() {
    this.showUserTop5videos();
  }

  private showUserTop5videos() {
    this.currentUser = this.membersAreaService.getCurrentUser();
    this.usersService.getTop5VideosId(this.currentUser.userId).subscribe(top5VideosStr => {
      this.youTubeService.getTop5WatchedVideosByUser(top5VideosStr.top5VideosId).subscribe(top5List => {
        this.playlist = top5List.items;
      }, err => console.log(err));
    }, err => console.log(err));
  }

  onSearchGetPlaylist(playlistFromSearch: YouTubeItem[]) {
    this.playlist = playlistFromSearch;
  }

  onShowVideo(videoId: string) {
    this.videoId = videoId;
  }
}

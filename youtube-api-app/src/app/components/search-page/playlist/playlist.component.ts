import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {YouTubeItem} from 'src/app/models/you-tube-list';
import {MembersAreaService} from "../../../services/members-area/members-area.service";
import {UserModel} from "../../../models/userModel";
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() video: YouTubeItem;
  @Output() videoId: EventEmitter<string> = new EventEmitter<string>();
  currentUser: UserModel;

  constructor(private membersAreaService: MembersAreaService, private  usersService:UsersService) {
  }

  ngOnInit() {
      //TODO:
    /* 
      debugger
    this.playlist = this.youTubeService.getPlaylist();
    this.currentUser = this.membersAreaService.getCurrentUser();
    // get top 5 watched videos string
    this.usersService.getIdsOfMostWatchedVideosByUser(this.currentUser.userId).subscribe(top5VideosStr => {
      console.log(top5VideosStr);
      debugger
      // show top 5 videos on playlist
      this.youTubeService.getMostWatchedVideosByUser(top5VideosStr.videosIdStr).subscribe(top5List => {
        debugger
        console.log(top5List);
        this.youTubeService.setPlaylist(top5List.items);//perhaps not needed
        this.playlist = this.youTubeService.getPlaylist();
      });
    });
    */
  }

  onPickedVideo(videoId: string) {
    this.currentUser = this.membersAreaService.getCurrentUser();
    this.usersService.addUserAndVideoId(this.currentUser.userId,videoId).subscribe(res=>console.log(res));
    this.videoId.emit(videoId);
  }

}

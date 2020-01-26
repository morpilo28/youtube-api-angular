import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YouTubeItem } from 'src/app/models/you-tube-list';
import { MembersAreaService } from "../../../services/members-area/members-area.service";
import { UsersService } from "../../../services/users/users.service";
import { YouTubeService } from 'src/app/services/youTube/you-tube.service';
import { UserModelFromService } from 'src/app/models/user-model-from-service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() video: YouTubeItem;
  @Output() videoId: EventEmitter<string> = new EventEmitter<string>();
  private currentUser: UserModelFromService;

  constructor(private membersAreaService: MembersAreaService, private usersService: UsersService, private youTubeService: YouTubeService) {
  }

  ngOnInit() {
  }

  onPickedVideo(videoId: string) {
    this.currentUser = this.membersAreaService.getCurrentUser();
    this.usersService.addUserAndVideoId(this.currentUser.userId, videoId).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.videoId.emit(videoId);
  }
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {YouTubeItem} from 'src/app/models/you-tube-list';
import {MembersAreaService} from "../../../services/members-area/members-area.service";
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() video: YouTubeItem;
  @Output() videoId: EventEmitter<string> = new EventEmitter<string>();
  currentUser: User;

  constructor(private membersAreaService: MembersAreaService, private  usersService:UsersService) {
  }

  ngOnInit() {
  }

  onPickedVideo(videoId: string) {
    this.currentUser = this.membersAreaService.getCurrentUser();
    this.usersService.postUserAndVideoId(this.currentUser.userId,videoId);
    this.videoId.emit(videoId);
  }

}

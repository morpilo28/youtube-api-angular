import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YouTubeItem } from 'src/app/models/you-tube-list';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() video: YouTubeItem;
  @Output() videoId: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onPickedVideo(videoId: string) {
    this.videoId.emit(videoId);
  }

}

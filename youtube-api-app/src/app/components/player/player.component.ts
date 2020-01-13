import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YouTubeItem } from 'src/app/models/you-tube-list';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private _videoId: string;
  private url: SafeResourceUrl;
  @Input() playlist: YouTubeItem[];
  @Input()
  get videoId(): string {
    return this._videoId;
  }
  set videoId(videoId: string) {
    this._videoId = videoId;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId);
  }
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onDisLike(videoId){
    console.log('dislike: ' + videoId)
  }

  onLike(videoId){
    console.log('like: ' + videoId)
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YouTubeService } from 'src/app/services/youTube/you-tube.service';
import { YouTubeItem } from 'src/app/models/you-tube-list';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private timeOut: number;
  @Output() playlist: EventEmitter<YouTubeItem[]> = new EventEmitter<YouTubeItem[]>();
  constructor(private youTubeService: YouTubeService) { }

  ngOnInit() {
  }

  onKeyUp(searchValue: string) {
    clearTimeout(this.timeOut);
    this.timeOut = window.setTimeout(() => {
      this.youTubeService.getVideosForPlaylist(searchValue).subscribe((res) => {
        this.playlist.emit(res.items);
      })
    }, 1.5 * 1000);
  }
}

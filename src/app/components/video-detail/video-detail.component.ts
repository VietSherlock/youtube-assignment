import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideoDataService } from 'src/app/services/video-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [
    VideoDataService
  ]
})
export class VideoDetailComponent implements OnInit {

// variable space
@Input() sidenav: any;

videoId: number;
videos: Video[];
video: Video;
safeUrl: any;


//contructor function
  constructor(private videoService: VideoDataService,
    private activateRoute: ActivatedRoute, 
    private _sanitizer: DomSanitizer) { 
    this.videoId = this.activateRoute.snapshot.params.id;

  }


// ngOnInit function
  ngOnInit(): void {
    this.videos = this.videoService.getVideoData();
    this.video = this.videos[this.videoId - 1];

    for(let i = 0; i < this.videos.length; i++){
      this.videos[i].url = this._sanitizer.bypassSecurityTrustResourceUrl(this.videos[i].url);
    }

  }


// Other functions



}

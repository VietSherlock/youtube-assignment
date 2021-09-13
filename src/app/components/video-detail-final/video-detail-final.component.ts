import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideoDataService } from 'src/app/services/video-data.service';

@Component({
  selector: 'app-video-detail-final',
  templateUrl: './video-detail-final.component.html',
  styleUrls: ['./video-detail-final.component.css'],
  providers: [
    VideoDataService
  ]
})
export class VideoDetailFinalComponent implements OnInit {
// variable space
@Input() sidenav: any;

videoId: number;
videos: Video[];
video: Video;
safeUrl: any;


//contructor function
  constructor(private videoService: VideoDataService,
    private activateRoute: ActivatedRoute, 
    private _sanitizer: DomSanitizer,
    private router: Router) { 
      
  }  


// ngOnInit function
  ngOnInit(): void {
    this.videos = this.videoService.getVideoData();
    for(let i = 0; i < this.videos.length; i++){
      this.videos[i].url = this._sanitizer.bypassSecurityTrustResourceUrl(this.videos[i].url);
    }

    this.videoId = this.activateRoute.snapshot.params.id;
    this.activateRoute.params.subscribe(
      (params: Params) => {
        this.videoId = params['id'];
      }
    );

    this.video = this.videos[this.videoId - 1];

  }

  //other functions
  goToVideoDetail(id: number){
    // this.router.navigateByUrl('/view-video-detail/' + id);
    // this.videoId = this.activateRoute.snapshot.params.id;
    this.router.navigateByUrl('/view-video-detail-final/' + id);

    setTimeout(()=>{  
      window.location.reload();
  }, 200);
    
  }


}

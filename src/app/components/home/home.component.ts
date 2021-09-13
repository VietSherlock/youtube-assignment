import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VideoDataService } from 'src/app/services/video-data.service';
import { Video } from 'src/app/models/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
// variable
@ViewChild(MatSidenav) sidenav!: MatSidenav;
videos: Video[] = [];


// constructor() function
  constructor(private observer: BreakpointObserver,
              private videoservice: VideoDataService,
              private router: Router
              ) { }

//handel side-bar on/off 
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1300px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

// ngOnInit() function
  ngOnInit(): void {
    this.videos = this.videoservice.getVideoData();
  }

//other functions 
goToVideoDetail(id: string){
  // this.router.navigateByUrl('/view-video-detail/' + id);
  this.router.navigateByUrl('/view-video-detail-final/' + id);
}


}

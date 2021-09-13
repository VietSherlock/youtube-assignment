import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideoDataService } from 'src/app/services/video-data.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css'],
  providers: [
    VideoDataService
  ]
})
export class TableManagerComponent implements OnInit{
  
// variable
  VIDEOS: Video[] = this.videoService.getVideoData();
  page = 1;
  pageSize = 4;
  collectionSize = this.VIDEOS.length;
  videos: Video[];

  fileName= 'ExcelSheet.xlsx';  

// constructor and ngOnInit
  constructor(private videoService: VideoDataService) {
    this.refreshVideos();

  }

  ngOnInit(): void {

  }

// other functions
  refreshVideos() {
    this.videos = this.VIDEOS
      .map((video, i) => ({id: i + 1, ...video}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  // export to excel function
  exportexcel(): void { 
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       XLSX.writeFile(wb, this.fileName);
			
    }
}
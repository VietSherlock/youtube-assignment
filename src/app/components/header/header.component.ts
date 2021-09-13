import { Component, HostListener, Input, OnInit} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
// variable space
  @Input() sidenav: any;  

  // innerWidth = 833;
  innerWidth: any;


// constructor and lifecycle functions
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

// other normal functions
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  
  

}

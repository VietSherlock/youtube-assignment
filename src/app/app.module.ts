import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightDirective } from './directives/highlight.directive';
import { VideoDataService } from './services/video-data.service';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { TableManagerComponent } from './components/table-manager/table-manager.component';
import { FormsModule } from '@angular/forms';
import { VideoDetailFinalComponent } from './components/video-detail-final/video-detail-final.component';

// define routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-video-detail/:id', component: VideoDetailComponent },
  { path: 'video-manager', component: TableManagerComponent },
  { path: 'view-video-detail-final/:id', component: VideoDetailFinalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightDirective,
    VideoDetailComponent,
    TableManagerComponent,
    VideoDetailFinalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    VideoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

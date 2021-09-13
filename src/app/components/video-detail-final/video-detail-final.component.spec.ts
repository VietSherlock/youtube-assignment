import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailFinalComponent } from './video-detail-final.component';

describe('VideoDetailFinalComponent', () => {
  let component: VideoDetailFinalComponent;
  let fixture: ComponentFixture<VideoDetailFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetailFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

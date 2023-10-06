import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNowPlayingComponent } from './detail-now-playing.component';

describe('DetailNowPlayingComponent', () => {
  let component: DetailNowPlayingComponent;
  let fixture: ComponentFixture<DetailNowPlayingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailNowPlayingComponent]
    });
    fixture = TestBed.createComponent(DetailNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

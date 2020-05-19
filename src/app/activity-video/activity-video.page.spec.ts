import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityVideoPage } from './activity-video.page';

describe('ActivityVideoPage', () => {
  let component: ActivityVideoPage;
  let fixture: ComponentFixture<ActivityVideoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

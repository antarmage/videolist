import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDumbComponent } from './video-dumb.component';

describe('VideoDumbComponent', () => {
  let component: VideoDumbComponent;
  let fixture: ComponentFixture<VideoDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

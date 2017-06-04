import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDumbComponent } from './login-dumb.component';

describe('LoginDumbComponent', () => {
  let component: LoginDumbComponent;
  let fixture: ComponentFixture<LoginDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

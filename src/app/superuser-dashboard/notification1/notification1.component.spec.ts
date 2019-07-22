import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification1Component } from './notification1.component';

describe('NotificationComponent', () => {
  let component: Notification1Component;
  let fixture: ComponentFixture<Notification1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notification1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Notification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

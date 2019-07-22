import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotpaymentComponent } from './usernotpayment.component';

describe('UsernotpaymentComponent', () => {
  let component: UsernotpaymentComponent;
  let fixture: ComponentFixture<UsernotpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernotpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernotpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

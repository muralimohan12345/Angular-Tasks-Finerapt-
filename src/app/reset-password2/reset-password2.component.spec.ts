import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassword2Component } from './reset-password2.component';

describe('ResetPassword2Component', () => {
  let component: ResetPassword2Component;
  let fixture: ComponentFixture<ResetPassword2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPassword2Component]
    });
    fixture = TestBed.createComponent(ResetPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

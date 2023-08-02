import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionsComponent } from './televisions.component';

describe('TelevisionsComponent', () => {
  let component: TelevisionsComponent;
  let fixture: ComponentFixture<TelevisionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelevisionsComponent]
    });
    fixture = TestBed.createComponent(TelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

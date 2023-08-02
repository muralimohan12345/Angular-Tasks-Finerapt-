import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTelevisionComponent } from './add-television.component';

describe('AddTelevisionComponent', () => {
  let component: AddTelevisionComponent;
  let fixture: ComponentFixture<AddTelevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTelevisionComponent]
    });
    fixture = TestBed.createComponent(AddTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

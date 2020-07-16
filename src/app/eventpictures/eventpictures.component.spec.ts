import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpicturesComponent } from './eventpictures.component';

describe('EventpicturesComponent', () => {
  let component: EventpicturesComponent;
  let fixture: ComponentFixture<EventpicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventpicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetimeuseComponent } from './onetimeuse.component';

describe('OnetimeuseComponent', () => {
  let component: OnetimeuseComponent;
  let fixture: ComponentFixture<OnetimeuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetimeuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetimeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

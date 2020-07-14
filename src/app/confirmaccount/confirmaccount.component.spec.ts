import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaccountComponent } from './confirmaccount.component';

describe('ConfirmaccountComponent', () => {
  let component: ConfirmaccountComponent;
  let fixture: ComponentFixture<ConfirmaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

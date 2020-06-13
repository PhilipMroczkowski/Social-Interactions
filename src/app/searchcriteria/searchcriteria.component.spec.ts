import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcriteriaComponent } from './searchcriteria.component';

describe('SearchcriteriaComponent', () => {
  let component: SearchcriteriaComponent;
  let fixture: ComponentFixture<SearchcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

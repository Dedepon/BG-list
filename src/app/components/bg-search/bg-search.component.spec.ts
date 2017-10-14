import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSearchComponent } from './bg-search.component';

describe('BgSearchComponent', () => {
  let component: BgSearchComponent;
  let fixture: ComponentFixture<BgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

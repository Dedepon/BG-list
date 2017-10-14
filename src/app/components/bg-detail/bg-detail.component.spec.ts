import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgDetailComponent } from './bg-detail.component';

describe('BgDetailComponent', () => {
  let component: BgDetailComponent;
  let fixture: ComponentFixture<BgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

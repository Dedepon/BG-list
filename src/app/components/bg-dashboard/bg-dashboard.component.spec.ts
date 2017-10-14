import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgDashboardComponent } from './bg-dashboard.component';

describe('BgDashboardComponent', () => {
  let component: BgDashboardComponent;
  let fixture: ComponentFixture<BgDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

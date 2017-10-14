import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgListComponent } from './bg-list.component';

describe('BgListComponent', () => {
  let component: BgListComponent;
  let fixture: ComponentFixture<BgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

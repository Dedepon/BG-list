import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTreeComponent } from './bg-tree.component';

describe('BgTreeComponent', () => {
  let component: BgTreeComponent;
  let fixture: ComponentFixture<BgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

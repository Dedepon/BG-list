import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCollectionComponent } from './bg-collection.component';

describe('BgCollectionComponent', () => {
  let component: BgCollectionComponent;
  let fixture: ComponentFixture<BgCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

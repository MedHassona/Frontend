import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledStoresComponent } from './labeled-stores.component';

describe('LabeledStoresComponent', () => {
  let component: LabeledStoresComponent;
  let fixture: ComponentFixture<LabeledStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

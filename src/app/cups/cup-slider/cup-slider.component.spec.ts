import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupSliderComponent } from './cup-slider.component';

describe('CupSliderComponent', () => {
  let component: CupSliderComponent;
  let fixture: ComponentFixture<CupSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

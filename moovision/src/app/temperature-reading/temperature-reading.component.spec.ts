import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureReadingComponent } from './temperature-reading.component';

describe('TemperatureReadingComponent', () => {
  let component: TemperatureReadingComponent;
  let fixture: ComponentFixture<TemperatureReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

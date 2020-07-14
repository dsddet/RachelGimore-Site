import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthandsoulComponent } from './earthandsoul.component';

describe('EarthandsoulComponent', () => {
  let component: EarthandsoulComponent;
  let fixture: ComponentFixture<EarthandsoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthandsoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthandsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

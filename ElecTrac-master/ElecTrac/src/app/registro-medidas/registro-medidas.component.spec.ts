import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedidasComponent } from './registro-medidas.component';

describe('RegistroMedidasComponent', () => {
  let component: RegistroMedidasComponent;
  let fixture: ComponentFixture<RegistroMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

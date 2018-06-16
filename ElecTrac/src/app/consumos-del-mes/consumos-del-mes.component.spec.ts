import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumosDelMesComponent } from './consumos-del-mes.component';

describe('ConsumosDelMesComponent', () => {
  let component: ConsumosDelMesComponent;
  let fixture: ComponentFixture<ConsumosDelMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumosDelMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumosDelMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

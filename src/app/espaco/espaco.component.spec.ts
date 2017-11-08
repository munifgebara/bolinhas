import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacoComponent } from './espaco.component';

describe('EspacoComponent', () => {
  let component: EspacoComponent;
  let fixture: ComponentFixture<EspacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

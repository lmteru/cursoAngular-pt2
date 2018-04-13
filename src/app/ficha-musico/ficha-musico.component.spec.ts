import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMusicoComponent } from './ficha-musico.component';

describe('FichaMusicoComponent', () => {
  let component: FichaMusicoComponent;
  let fixture: ComponentFixture<FichaMusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

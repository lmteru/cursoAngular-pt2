import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaMusicaComponent } from './ficha-musica.component';

describe('FichaMusicaComponent', () => {
  let component: FichaMusicaComponent;
  let fixture: ComponentFixture<FichaMusicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMusicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

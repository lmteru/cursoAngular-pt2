import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCompletaComponent } from './tabela-completa.component';

describe('TabelaCompletaComponent', () => {
  let component: TabelaCompletaComponent;
  let fixture: ComponentFixture<TabelaCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

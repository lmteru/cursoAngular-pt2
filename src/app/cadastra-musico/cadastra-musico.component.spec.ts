import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMusicoComponent } from './cadastra-musico.component';

describe('CadastraMusicoComponent', () => {
  let component: CadastraMusicoComponent;
  let fixture: ComponentFixture<CadastraMusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraMusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

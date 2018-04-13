import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMusicosComponent } from './lista-musicos.component';

describe('ListaMusicosComponent', () => {
  let component: ListaMusicosComponent;
  let fixture: ComponentFixture<ListaMusicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMusicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMusicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

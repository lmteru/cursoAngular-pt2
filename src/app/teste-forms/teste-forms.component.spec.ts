import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFormsComponent } from './teste-forms.component';

describe('TesteFormsComponent', () => {
  let component: TesteFormsComponent;
  let fixture: ComponentFixture<TesteFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

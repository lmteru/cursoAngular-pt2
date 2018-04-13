import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasRootComponent } from './musicas-root.component';

describe('MusicasRootComponent', () => {
  let component: MusicasRootComponent;
  let fixture: ComponentFixture<MusicasRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicasRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

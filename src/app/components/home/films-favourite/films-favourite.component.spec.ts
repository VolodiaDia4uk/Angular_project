import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFavouriteComponent } from './films-favourite.component';

describe('FilmsFavouriteComponent', () => {
  let component: FilmsFavouriteComponent;
  let fixture: ComponentFixture<FilmsFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

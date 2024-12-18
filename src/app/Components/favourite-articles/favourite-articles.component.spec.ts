import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteArticlesComponent } from './favourite-articles.component';

describe('FavouriteArticlesComponent', () => {
  let component: FavouriteArticlesComponent;
  let fixture: ComponentFixture<FavouriteArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteArticlesComponent]
    });
    fixture = TestBed.createComponent(FavouriteArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

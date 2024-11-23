import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificArticleComponent } from './specific-article.component';

describe('SpecificArticleComponent', () => {
  let component: SpecificArticleComponent;
  let fixture: ComponentFixture<SpecificArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificArticleComponent]
    });
    fixture = TestBed.createComponent(SpecificArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

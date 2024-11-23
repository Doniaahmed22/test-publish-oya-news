import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetAPIsService } from 'src/app/Services/get-apis.service';

@Component({
  selector: 'app-favourite-articles',
  templateUrl: './favourite-articles.component.html',
  styleUrls: ['./favourite-articles.component.scss']
})
export class FavouriteArticlesComponent implements OnInit {
  favoriteArticles: any[] = [];

  constructor(private _GetAPIsService:GetAPIsService, private router:Router, private _ToastrService: ToastrService ){}

  ngOnInit(): void {
    const storedFavorites = localStorage.getItem('favoriteArticles');
    this.favoriteArticles = storedFavorites ? JSON.parse(storedFavorites) : [];
  }



  delFavorite(article: any) {
    const index = this.favoriteArticles.findIndex(
      (fav) => fav.title === article.title
    );
      // إذا كانت موجودة، احذفها
      this.favoriteArticles.splice(index, 1);
      this._ToastrService.success('Article Deleted From Favourite');

    

    // تحديث Local Storage
    localStorage.setItem('favoriteArticles', JSON.stringify(this.favoriteArticles));
  }

  isFavorite(article: any): boolean {
    return this.favoriteArticles.some(
      (fav) => fav.title === article.title
    );
  }


  viewDetails(article: any): void {
    this._GetAPIsService.setArticle(article);
    this.router.navigate(['/spesific-article', article.title]);
  }



}

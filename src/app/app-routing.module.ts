import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SpecificCategoryComponent } from './Components/specific-category/specific-category.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { SpecificArticleComponent } from './Components/specific-article/specific-article.component';
import { FavouriteArticlesComponent } from './Components/favourite-articles/favourite-articles.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [

  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category-details/:section/:type', component: SpecificCategoryComponent },
  { path: 'spesific-article/:title', component: SpecificArticleComponent },
  { path: 'favourite-articles', component: FavouriteArticlesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: "/home", pathMatch: 'full' },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

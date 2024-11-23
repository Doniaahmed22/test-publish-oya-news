import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SpecificCategoryComponent } from './Components/specific-category/specific-category.component';
import { CutTextPipe } from './Pipes/cut-text.pipe';
import { LoadInterceptor } from './Interceptors/load.interceptor';
import { LoadingComponent } from './Components/loading/loading.component';
import { SpecificArticleComponent } from './Components/specific-article/specific-article.component';
import { FormsModule } from '@angular/forms';
import { FavouriteArticlesComponent } from './Components/favourite-articles/favourite-articles.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './Components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SpecificCategoryComponent,
    CutTextPipe,
    LoadingComponent,
    SpecificArticleComponent,
    FavouriteArticlesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{
    
      provide: HTTP_INTERCEPTORS,
      useClass: LoadInterceptor,
      multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

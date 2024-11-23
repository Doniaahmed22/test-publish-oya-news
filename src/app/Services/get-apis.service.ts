import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIsService {

  // private apiKey: string = '77a799269451407394253d248e88af99';
  private apiKey: string = '77a799269451407394253d248e88af99';


  constructor(private _HttpClient: HttpClient) { }

  getSpecificCategory(section: string, type: string): Observable<any> {
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?${section}=${type}&apiKey=${this.apiKey}`);
  }

  private selectedArticle: any;

  setArticle(article: any): void {
    this.selectedArticle = article;
  }

  getArticle(): any {
    return this.selectedArticle;
  }


  articlesFilter(country: string = "", source: string = "", category: string = "", q: string = ""): Observable<any> {
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=${country}&sources=${source}&category=${category}&q=${q}&apiKey=${this.apiKey}`);
  }


  // randomArticles():Observable<any>{
  //   return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`)
  // }





randomArticles(): Observable<any[]> {
  return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`).pipe(
    map((response: any) => {
      // جلب المقالات من النتائج
      const articles = response.articles;

      // التحقق من أن هناك نتائج كافية
      if (!articles || articles.length === 0) {
        return [];
      }

      // اختيار عدد عشوائي بين 5 و8
      const randomCount = Math.floor(Math.random() * (8 - 5 + 1)) + 5;

      // خلط المقالات للحصول على ترتيب عشوائي
      const shuffledArticles = articles.sort(() => 0.5 - Math.random());

      // اختيار العدد المطلوب
      return shuffledArticles.slice(0, randomCount);
    })
  );
}


}

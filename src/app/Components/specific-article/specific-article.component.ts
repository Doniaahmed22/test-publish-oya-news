import { Component, OnInit } from '@angular/core';
import { GetAPIsService } from 'src/app/Services/get-apis.service';

@Component({
  selector: 'app-specific-article',
  templateUrl: './specific-article.component.html',
  styleUrls: ['./specific-article.component.scss']
})
export class SpecificArticleComponent implements OnInit {
  article: any;
  constructor(private _GetAPIsService: GetAPIsService) { }

  ngOnInit(): void {
    this.article = this._GetAPIsService.getArticle();
    console.log(this.article);

  }

  goToUrl(url: string): void {
    window.open(url, '_blank');
  }







}

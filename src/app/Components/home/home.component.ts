import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetAPIsService } from 'src/app/Services/get-apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in')
      ])
    ]),
    trigger('slideUp', [
      state('true', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('1s 1s ease-out') // يبدأ بعد نصف ثانية من ظهور الصورة
      ])
    ])
  ]

})
export class HomeComponent implements OnInit{

  homeArticle:any = {
    "author": "Gio Benitez, Kevin Shalvey",
    "title": "Sprit Airlines files for Chapter 11 bankruptcy protection",
    "description": "A federal judge had blocked the budget airline's proposed merger with JetBlue.",
    "url": "https://abcnews.go.com/US/spirit-airlines-files-chapter-11-bankruptcy-protection/story?id=115960468",
    "urlToImage": "https://i.abcnewsfe.com/a/9bf055d8-56d4-41b8-8b92-314908bb8c18/spirit-main_1731927229653_hpMain_16x9.jpg?w=1600",
    "publishedAt": "2024-11-18T11:09:53Z",
    "content": "Spirit Airlines filed on Monday for Chapter 11 bankruptcy protection, months after a federal judge blocked the budget airline's proposed merger with JetBlue.\r\nThis is a developing story. Please check… [+17 chars]"
    };
    // {
    //   "author": "Aicha El Hammar Castano, Sam Sweeney",
    //   "title": "Spirit Airlines plane struck by gunfire attempting to land in Haiti",
    //   "description": "Flights into and out of Port-au-Prince, Haiti were suspended after a Spirit Airlines plane was struck by gunfire while attempting to land there.",
    //   "url": "https://abcnews.go.com/International/spirit-airlines-plane-struck-gunfire-attempting-land-haiti/story?id=115743737",
    //   "urlToImage": "https://i.abcnewsfe.com/a/057132b0-0ef4-4a5b-ae28-ef44579ee183/spirit-airlines-as-lv-241111-2_1731352332782_hpMain_16x9.jpg?w=1600",
    //   "publishedAt": "2024-11-11T20:39:04Z",
    //   "content": "A Spirit Airlines plane flying from Fort Lauderdale, Florida, to Haiti was diverted after it was struck by gunfire while attempting to land in Port-au-Prince, the Haitian National Office of Civil Avi… [+2136 chars]"
    //   }
    
  trendingArticles!: any[] ;

  constructor(private _GetAPIsService: GetAPIsService, private router: Router) { }
  ngOnInit(): void {
    this._GetAPIsService.randomArticles().subscribe({
      next:(response)=>{
        this.trendingArticles = response;
      }
    })
  }

  countries = [
    { code: 'us', name: 'United States' , image :'https://flagcdn.com/us.svg'},
    { code: 'eg', name: 'Egypt'  , image :'https://flagcdn.com/eg.svg'},
    { code: 'de', name: 'Germany'  , image :'https://flagcdn.com/de.svg'},
    { code: 'gb', name: 'United Kingdom'  , image :'https://flagcdn.com/gb.svg'},
    { code: 'fr', name: 'France'  , image :'https://flagcdn.com/fr.svg'},
    { code: 'it', name: 'Italy'  , image :'https://flagcdn.com/it.svg'},
    { code: 'jp', name: 'Japan'  , image :'https://flagcdn.com/jp.svg'},
    { code: 'in', name: 'India'  , image :'https://flagcdn.com/in.svg'},
    { code: 'au', name: 'Australia'  , image :'https://flagcdn.com/au.svg'},
    { code: 'ca', name: 'Canada'  , image :'https://flagcdn.com/ca.svg'},
  ];
  categories = [
    { code: 'business' , name: 'Business' , image :'https://i.pinimg.com/736x/3a/ca/f3/3acaf3ed836691ef6fed38f184de8c1d.jpg'},
    { code: 'entertainment' , name: 'entertainment',image:'https://i.pinimg.com/736x/86/19/5b/86195b49921549c9fee30d7c47d7113f.jpg' },
    { code: 'general' , name: 'general' ,image:'https://i.pinimg.com/736x/1a/c7/67/1ac7676d5c4a7e78a394e223737e0e36.jpg' },
    { code: 'health' , name: 'health' ,image:'https://i.pinimg.com/736x/81/d2/ac/81d2ace5b867843c8f76a9af96a2940d.jpg'},
    { code: 'science' , name: 'science' ,image:'https://i.pinimg.com/736x/4e/1f/5d/4e1f5dc337a02dfbc295b20acc501529.jpg'},
    { code: 'sports' , name: 'sports' , image:'https://i.pinimg.com/736x/cc/3d/4f/cc3d4fc45b8cfe9e7470396240266051.jpg'},
    { code: 'technology' , name: 'technology',image:'https://i.pinimg.com/736x/26/e9/09/26e909859ab6dc4193b4efd6e9ace86e.jpg' },
  ]





  cardVisible = true; // يتم تعيين هذه القيمة للتحكم في ظهور الـ card


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {

      0: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    rtl: true,
    nav: true
  }

  SpecificCategory(section: string, type: string): void {
    this.router.navigate(['/category-details', section, type]);
  }


  popularArticles: any[] = [
    {

      "author": "Jordan Middler",
      "title": "FromSoftware parent Kadokawa confirms Sony has sent it a ‘letter of intent’ to acquire it - Video Games Chronicle",
      "description": "Kadokawa has confirmed that it has received a letter of intent from Sony to acquire the company. Kadokawa owns a majority share in FromSoftware, as well as several anime production houses.",
      "url": "https://www.videogameschronicle.com/news/fromsoftware-parent-kadokawa-confirms-sony-has-sent-it-a-letter-of-intent-to-acquire-it/",
      "urlToImage": "https://www.videogameschronicle.com/files/2020/12/Bloodborne.jpg",
      "publishedAt": "2024-11-20T11:27:42Z",
      "content": "FromSoftware parent company Kadokawa has confirmed that it has received a letter of intent from Sony to acquire the company.\r\nEarlier this week it was reported by Reuters, citing two sources familiar… [+1123 chars]"
    },
    {

      "author": "",
      "title": "College Football Playoff Rankings: Oregon leads repeat top five as Georgia jumps back into 12-team field - CBS Sports",
      "description": "The third top 25 rankings of the 2024 season have arrived from the CFP Selection Committee",
      "url": "https://www.cbssports.com/college-football/news/college-football-playoff-rankings-oregon-leads-repeat-top-five-as-georgia-jumps-back-into-12-team-field/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/11/13/382ce09a-bd48-4a68-805c-059cbb93cc47/thumbnail/1200x675/70c23ec96b89bace48770f8ee92ec519/graphic-cfpr2024-2.png",
      "publishedAt": "2024-11-20T05:42:00Z",
      "content": "The third edition of the College Football Playoff Rankings were released Tuesday night with undefeated Oregon holding at No. 1 in the initial year of the expanded 12-team field. Off to a dominant sta… [+5283 chars]"
    },
    {

      "author": "ADITHI RAMAKRISHNAN",
      "title": "The dark energy pushing our universe apart may not be what it seems, scientists say - The Associated Press",
      "description": "Distant, ancient galaxies are giving scientists more hints that a mysterious force called dark energy may not be what they thought. Astronomers know the universe is expanding at an accelerating rate and they have long thought that a constant force called dark…",
      "url": "https://apnews.com/article/dark-energy-desi-cosmology-astronomy-7856ae96fab5cb42e6b4a6fd7c3555ec",
      "urlToImage": "https://dims.apnews.com/dims4/default/fbf5071/2147483647/strip/true/crop/6960x3915+0+363/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3d%2F38%2Ffbc6c077a6b4dfd46ed14acc93b5%2F7799fbb7eb194b74a17d4d7f484fa936",
      "publishedAt": "2024-11-20T01:13:00Z",
      "content": "NEW YORK (AP) Distant, ancient galaxies are giving scientists more hints that a mysterious force called dark energy may not be what they thought.\r\nAstronomers know that the universe is being pushed a… [+3802 chars]"
    }
  ]

  viewDetails(article: any): void {
    this._GetAPIsService.setArticle(article);
    this.router.navigate(['/spesific-article', article.title]);
  }















}


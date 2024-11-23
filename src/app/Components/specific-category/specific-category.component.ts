import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GetAPIsService } from 'src/app/Services/get-apis.service';

@Component({
  selector: 'app-specific-category',
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.scss']
})
export class SpecificCategoryComponent implements OnInit {
  type: string = '';
  section: string = '';
  articles: any[] = [];
  filteredArticles: any[] = [];
  favoriteArticles: any[] = []; // المفضلة

  private routeSubscription: Subscription = new Subscription();


  countries = [
    { code: 'us', name: 'United States' },
    { code: 'eg', name: 'Egypt' },
    { code: 'de', name: 'Germany' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'in', name: 'India' },
    { code: 'au', name: 'Australia' },
    { code: 'ca', name: 'Canada' },
    { code: '', name: 'Countries' }
  ];
  categories = [
    { code: 'business', name: 'Business' },
    { code: 'entertainment', name: 'entertainment' },
    { code: 'general', name: 'general' },
    { code: 'health', name: 'health' },
    { code: 'science', name: 'science' },
    { code: 'sports', name: 'sports' },
    { code: 'technology', name: 'technology' },
    { code: '', name: 'Categories' }
  ]
  sources = [
    { code: 'bbc-news', name: 'BBC News' },
    { code: 'cnn', name: 'CNN' },
    { code: 'bbc-sport', name: 'BBC Sport' },
    { code: 'the-new-york-times', name: 'The New York Times' },
    { code: 'al-jazeera-english', name: 'Al Jazeera English' },
    { code: 'reuters', name: 'Reuters' },
    { code: 'associated-press', name: 'Associated Press' },
    { code: 'fox-news', name: 'Fox News' },
    { code: '', name: 'Source' },
  ];

  selectedCountry: string = '';
  selectedCategory: string = '';
  selectedSource: string = this.sources[8].code;
  searchKeyword: string = '';

  constructor(
    private route: ActivatedRoute, // للوصول إلى الـ params
    private _GetAPIsService: GetAPIsService,
    private router: Router,
    private _ToastrService: ToastrService
  ) {
  }


  ngOnInit(): void {
    // الاشتراك في تغييرات الـ params
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.type = params.get('type')!;
      this.section = params.get('section')!;

      if (this.section === 'category') {
        // إذا كان الـ section = category، تعيين الـ type كـ selectedCategory
        this.selectedCategory = this.type;
      } else if (this.section === 'country') {
        // إذا لم يكن الـ section = category، إبقاء القيم الفارغة
        this.selectedCountry = this.type;
      }

      this.fetchCategoryData();
    });

    const storedFavorites = localStorage.getItem('favoriteArticles');
    this.favoriteArticles = storedFavorites ? JSON.parse(storedFavorites) : [];

  }



  toggleFavorite(article: any) {
    const index = this.favoriteArticles.findIndex(
      (fav) => fav.title === article.title
    );

    if (index === -1) {
      // إذا لم تكن المقالة مضافة للمفضلة
      this.favoriteArticles.push(article);
      this._ToastrService.success('Article Added To Favourite');

    } else {
      // إذا كانت موجودة، احذفها
      this.favoriteArticles.splice(index, 1);
      this._ToastrService.success('Article Deleted From Favourite');

    }

    // تحديث Local Storage
    localStorage.setItem('favoriteArticles', JSON.stringify(this.favoriteArticles));
  }

  isFavorite(article: any): boolean {
    return this.favoriteArticles.some(
      (fav) => fav.title === article.title
    );
  }





  fetchCategoryData(): void {
    this._GetAPIsService.getSpecificCategory(this.section, this.type).subscribe({
      next: (response: any) => {
        console.log(response);

        this.articles = response.articles;
        this.filteredArticles = [...response.articles]; // نسخ المقالات لتجنب التعديل المباشر
      },
      error: (err) => console.error('Error fetching data', err),
    });
  }

  applyFilters(): void {
    if (this.selectedSource !== '') {
      this.selectedCategory = '';
      this.selectedCountry = '';
    }

    // تطبيق التصفية بناءً على المقالات الحالية
    this._GetAPIsService.articlesFilter(this.selectedCountry, this.selectedSource, this.selectedCategory, this.searchKeyword).subscribe({
      next: (response: any) => {
        console.log(response.articles);

        this.filteredArticles = response.articles;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }




  viewDetails(article: any): void {
    this._GetAPIsService.setArticle(article);
    this.router.navigate(['/spesific-article', article.title]);
  }


  ngOnDestroy(): void {
    // إلغاء الاشتراك لتجنب التسريبات
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}


















// isCountryDropdownOpen = false; // للتحكم في إظهار قائمة الدول
  // isCategoryDropdownOpen = false; // للتحكم في إظهار قائمة الفئات
  // isSourceDropdownOpen = false; // للتحكم في إظهار قائمة المصادر

  // selectedCountryName: string | null = null; // اسم الدولة المختارة
  // selectedCategoryName: string | null = null; // اسم الفئة المختارة
  // selectedSourceName: string | null = null; // اسم المصدر المختار

  // toggleDropdown(type: string) {
  //   if (type === 'country') {
  //     this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
  //     this.isCategoryDropdownOpen = false;
  //     this.isSourceDropdownOpen = false;
  //   } else if (type === 'category') {
  //     this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
  //     this.isCountryDropdownOpen = false;
  //     this.isSourceDropdownOpen = false;
  //   } else if (type === 'source') {
  //     this.isSourceDropdownOpen = !this.isSourceDropdownOpen;
  //     this.isCountryDropdownOpen = false;
  //     this.isCategoryDropdownOpen = false;
  //   }
  // }

  // selectCountry(country: any) {
  //   this.selectedCountry = country.code;
  //   this.selectedCountryName = country.name;
  //   this.isCountryDropdownOpen = false;
  // }

  // selectCategory(category: any) {
  //   this.selectedCategory = category.code;
  //   this.selectedCategoryName = category.name;
  //   this.isCategoryDropdownOpen = false;
  // }

  // selectSource(source: any) {
  //   this.selectedSource = source.code;
  //   this.selectedSourceName = source.name;
  //   this.isSourceDropdownOpen = false;
  // }

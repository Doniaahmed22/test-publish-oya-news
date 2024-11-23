import { ThemeService } from './../../Services/theme.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, public themeService:ThemeService){}
  SpecificCategory(section:string,type:string):void{
    this.router.navigate(['/category-details', section , type]);
  }






  toggleTheme() {
    this.themeService.toggleTheme();
  }



  countries = [
    { code: 'us', name: 'United States' },
    { code: 'eg', name: 'Egypt'  },
    { code: 'de', name: 'Germany'  },
    { code: 'gb', name: 'United Kingdom'  },
    { code: 'fr', name: 'France'  },
    { code: 'it', name: 'Italy'  },
    { code: 'jp', name: 'Japan'  },
    { code: 'in', name: 'India'  },
    { code: 'au', name: 'Australia'  },
    { code: 'ca', name: 'Canada'  },
  ];


  categories = [
    { code: 'business' , name: 'Business' },
    { code: 'entertainment' , name: 'entertainment' },
    { code: 'general' , name: 'general'  },
    { code: 'health' , name: 'health' },
    { code: 'science' , name: 'science' },
    { code: 'sports' , name: 'sports' },
    { code: 'technology' , name: 'technology' },
  ]
}

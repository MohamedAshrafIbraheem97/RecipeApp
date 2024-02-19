import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showSearchBar: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // Check if the current route is the details page
        this.showSearchBar = !val.url.includes('/recipes/');
      }
    });
  }
}

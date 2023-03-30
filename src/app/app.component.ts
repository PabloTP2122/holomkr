import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'holomkr';
  isOpen = false;
  routeSubscription!: Subscription;

  constructor(
    private gtmService: GoogleTagManagerService,
    private router: Router
  ) {
    this.gtmService.addGtmToDom();
  }

  change: boolean = true;

  ngOnInit(): void {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        event.url === '/' ? this.change = true : this.change = !this.change;
      }
    });
  }
}

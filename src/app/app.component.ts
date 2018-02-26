import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

import { NavigationEnd, Router } from '@angular/router';
import { AppConfig } from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService,
    private title: Title,
    private meta: Meta,
    private router: Router) {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.title.setTitle('Angular Developer');
  }
}

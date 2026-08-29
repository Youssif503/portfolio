import { Component } from '@angular/core';
import { BlogSectionComponent } from './components/blog-section/blog-section';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ProjectsSectionComponent } from './components/projects-section/projects-section';
import { SiteFooterComponent } from './components/site-footer/site-footer';
import { SiteNavComponent } from './components/site-nav/site-nav';

@Component({
  selector: 'app-root',
  imports: [
    SiteNavComponent,
    HeroSectionComponent,
    ProjectsSectionComponent,
    BlogSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

import { Component } from '@angular/core';
import { GithubIconComponent } from '../github-icon/github-icon';
import { NAV_LINKS } from '../../data/portfolio-content';
import { NavLink } from '../../models/portfolio';

@Component({
  selector: 'app-site-nav',
  imports: [GithubIconComponent],
  templateUrl: './site-nav.html',
  styles: ':host { display: contents; }'
})
export class SiteNavComponent {
  readonly links: NavLink[] = NAV_LINKS;
}

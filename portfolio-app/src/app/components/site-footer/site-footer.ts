import { Component } from '@angular/core';
import { FOOTER_TEXT, SOCIAL_LINKS } from '../../data/portfolio-content';
import { SocialLink } from '../../models/portfolio';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styles: ':host { display: contents; }'
})
export class SiteFooterComponent {
  readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  readonly footerText = FOOTER_TEXT;
}

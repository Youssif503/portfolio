import { Component } from '@angular/core';
import { HERO } from '../../data/portfolio-content';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styles: ':host { display: contents; }'
})
export class HeroSectionComponent {
  readonly hero = HERO;
}

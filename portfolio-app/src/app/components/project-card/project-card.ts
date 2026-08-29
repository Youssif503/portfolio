import { Component, Input } from '@angular/core';
import { GithubIconComponent } from '../github-icon/github-icon';
import { ScrollStaggerDirective } from '../../directives/scroll-stagger';
import { Project } from '../../models/portfolio';

@Component({
  selector: 'app-project-card',
  imports: [GithubIconComponent, ScrollStaggerDirective],
  templateUrl: './project-card.html',
  styles: ':host { display: contents; }'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}

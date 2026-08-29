import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { ScrollStaggerDirective } from '../../directives/scroll-stagger';
import { PROJECTS } from '../../data/portfolio-content';
import { Project } from '../../models/portfolio';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCardComponent, ScrollStaggerDirective],
  templateUrl: './projects-section.html',
  styles: ':host { display: contents; }'
})
export class ProjectsSectionComponent {
  readonly projects: Project[] = PROJECTS;
}

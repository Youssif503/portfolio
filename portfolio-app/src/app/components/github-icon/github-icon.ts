import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-icon',
  templateUrl: './github-icon.html'
})
export class GithubIconComponent {
  @Input() sizeClass = 'w-5 h-5';
}

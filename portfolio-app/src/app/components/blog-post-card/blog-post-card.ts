import { Component, Input } from '@angular/core';
import { ScrollStaggerDirective } from '../../directives/scroll-stagger';
import { BlogPost } from '../../models/portfolio';

@Component({
  selector: 'app-blog-post-card',
  imports: [ScrollStaggerDirective],
  templateUrl: './blog-post-card.html',
  styles: ':host { display: contents; }'
})
export class BlogPostCardComponent {
  @Input({ required: true }) post!: BlogPost;
}

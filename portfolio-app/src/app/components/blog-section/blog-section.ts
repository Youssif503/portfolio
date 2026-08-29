import { Component } from '@angular/core';
import { BlogPostCardComponent } from '../blog-post-card/blog-post-card';
import { ScrollStaggerDirective } from '../../directives/scroll-stagger';
import { BLOG_POSTS } from '../../data/portfolio-content';
import { BlogPost } from '../../models/portfolio';

@Component({
  selector: 'app-blog-section',
  imports: [BlogPostCardComponent, ScrollStaggerDirective],
  templateUrl: './blog-section.html',
  styles: ':host { display: contents; }'
})
export class BlogSectionComponent {
  readonly posts: BlogPost[] = BLOG_POSTS;
}

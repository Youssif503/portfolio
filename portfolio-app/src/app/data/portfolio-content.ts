import { BlogPost, NavLink, Project, SocialLink } from '../models/portfolio';

export const NAV_LINKS: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blogs' }
];

export const PROFILE_GITHUB_URL = 'https://github.com/Youssif503';

export const HERO = {
  greeting: 'أهلًا، أنا يوسف سيد.',
  tagline: 'بكتب كود. وببني حاجات.',
  summary:
    'Full-stack developer working with .NET, Angular, SQL Server, Redis, and Docker. I build scalable web applications with clean and reliable architecture.'
};

export const PROJECTS: Project[] = [
  {
    title: 'Noon Clone',
    description:
      'A high-performance e-commerce platform clone built with ASP.NET Core, focusing on scalability and clean architecture.',
    tags: ['ASP.NET Core', 'SQL Server', 'Redis', 'Clean Architecture', 'UOW & Repository Pattern'],
    sourceUrl: 'https://github.com/Youssif503/noon-clone'
  },
  {
    title: 'WhatsApp Clone',
    description:
      'A real-time messaging application clone using Asp .Net, Sqlite and SignalR for seamless communication.',
    tags: ['Asp .Net', 'SignalR', 'Sqlite', 'n-layer-architecture'],
    sourceUrl: 'https://github.com/Youssif503/WhatsApp-Clone'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'Sept 24, 2026',
    title: 'The Clean Way to Handle Different Behaviors: Strategy Pattern',
    excerpt:
      'A deep dive into implementing the Strategy Pattern to manage complex behaviors in a clean and maintainable way.',
    url: 'https://medium.com/@syoussif844/the-clean-way-to-handle-different-behaviors-strategy-pattern-6a9497729291?sharedUserId=syoussif844'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Youssif503', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swe-youssifsayed/', external: true },
  { label: 'Email', href: 'mailto:syoussif844@gmail.com', external: false }
];

export const FOOTER_TEXT = 'Built by Usef Sayed \u00a9 2026';

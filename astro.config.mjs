import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Orchestra Platform',
      description: 'Documentation for the Orchestra Platform - Bioinformatics and Data Science Learning Environment',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/seandavi/orchestra-operator',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/introduction/' },
            { label: 'Installation', link: '/getting-started/installation/' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'Platform Overview', link: '/architecture/platform-overview/' },
            { label: 'Domain Structure', link: '/architecture/domain-structure/' },
            { label: 'Components', link: '/architecture/components/' },
          ],
        },
        {
          label: 'User Guide',
          items: [
            { label: 'Creating Workshops', link: '/user-guide/creating-workshops/' },
            { label: 'Managing Workshops', link: '/user-guide/managing-workshops/' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'REST API', link: '/api/rest-api/' },
            { label: 'Kubernetes CRDs', link: '/api/crds/' },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Contributing', link: '/development/contributing/' },
            { label: 'Local Development', link: '/development/local-development/' },
          ],
        },
      ],
    }),
  ],
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'dev-docs.orchestraplatform.org',
        'docs.orchestraplatform.org',
        'localhost',
        '127.0.0.1'
      ],
    },
  },
});

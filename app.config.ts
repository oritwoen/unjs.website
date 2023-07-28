export default defineAppConfig({
  website: {
    footer: {
      quote: 'Unlock the potential of your web development journey with UnJS - where innovation meets simplicity, and possibilities become limitless.',
      warning: 'Unofficial UnJS Website',
      menu: [
        {
          title: 'Community',
          items: [
            {
              title: 'Contribute',
              url: 'https://github.com/mastering-unjs/content',
              rel: 'noopener',
              target: '_blank',
            },
            {
              title: 'FAQ',
              url: '/faq',
            },
            {
              title: 'Contact us',
              url: 'mailto:contact@mastering-unjs.dev',
            },
          ],
        },
        {
          title: 'Articles',
          items: [
            {
              title: 'Learn',
              url: '/learn',
            },
            {
              title: 'Build',
              url: '/build',
            },
            {
              title: 'Explore',
              url: '/explore',
            },
            {
              title: 'Search',
              url: '/search',
            },
          ],
        },
        {
          title: 'UnJS',
          items: [
            {
              title: 'Website',
              url: 'https://unjs.io',
              rel: 'noopener',
              target: '_blank',
            },
            {
              title: 'GitHub',
              url: 'https://github.com/unjs',
              rel: 'noopener',
              target: '_blank',
            },
          ],
        },
      ],
    },
    socials: {
      github: {
        url: 'https//github.com/mastering-unjs',
        rel: 'noopener',
        target: '_blank',
        icon: 'i-logos-github-icon?mask',
        name: 'GitHub',
      },
      twitter: {
        url: 'https//twitter.com/mastering_unjs',
        icon: 'i-logos-twitter?mask',
        rel: 'noopener',
        target: '_blank',
        name: 'Twitter',
      },
      rss: {
        url: '/feed.xml',
        icon: 'i-heroicons-rss?mask',
        name: 'RSS',
      },
    },
  },
})
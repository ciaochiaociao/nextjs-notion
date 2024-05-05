import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ecbb470232834a82837eaf3427b7bb23',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Chiao-Wei Hsu\'s Blog',
  domain: 'chiao-wei-hsu-blog.vercel.app',
  author: 'Chiao-Wei Hsu',

  // open graph metadata (optional)
  description: 'A place to share my thoughts and ideas.',

  // social usernames (optional)
  twitter: 'ciaochiaociao',
  github: 'ciaochiaociao',
  linkedin: 'chiao-wei-hsu',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.2,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/projects': '50b47e94d12f4503a925ab3669dc473d',
    '/research': '3de07e9ce44f4d70af112e75caadf59a',
    '/blog': '6531ef1388d34fcaa098f496e20b6955',
    '/about': '51bf2076a7db444b82b7c1eba93f72a6',
    '/contact': 'd71bc666dfe546b09334ef91fd0ec28b',
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: 'ecbb470232834a82837eaf3427b7bb23'
    },
    {
      title: 'Projects',
      pageId: '50b47e94d12f4503a925ab3669dc473d'
    },
    {
      title: 'Research',
      pageId: '3de07e9ce44f4d70af112e75caadf59a'
    },
    {
      title: 'Blog',
      pageId: '6531ef1388d34fcaa098f496e20b6955'
    },
    {
      title: 'About',
      pageId: '51bf2076a7db444b82b7c1eba93f72a6'
    },
    {
      title: 'Contact',
      pageId: 'd71bc666dfe546b09334ef91fd0ec28b'
    }
  ]
})

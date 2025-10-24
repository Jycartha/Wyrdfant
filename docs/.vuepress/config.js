import { viteBundler } from '@vuepress/bundler-vite'
import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Wyrdfant',
  description: 'My Love & My Will',
  base: "/Wyrdfant/",

  theme: defaultTheme({
    logo: '/images/12prongGoldTransparent.png',
    logoDark: '/images/12prongGoldTransparent.png',
    colorMode: 'dark',
    colorModeSwitch: false,

    contributors: false,
    navbar: [
      {
        text: 'Updates',
        link: '/updates/',
      },
      {
        text: 'Encyclopedia',
        link: '/encyclopedia/',
      },
      {
        text: 'Writings',
        link: '/writings/',
      },
    ],
    sidebar: {
      '/encyclopedia/': [
        {
          text: 'Aliffrüme Encyclopedia',
          link: '/encyclopedia/',
          children: [
            'Glossary',
            {
             text: 'Anthropology',
             collapsible: true,
             prefix: 'Anthropology/',
             children: [
              'Arteries (Organization)',
              'Central Calendar',
              'Culture',
              'Languages',
              'Legends',
              'Religions',
              'Titles & Honorifics',
              'Traditions',
             ],
            },
            {
             text: 'Geography',
             collapsible: true,
             prefix: 'Geography/',
             children: [
               'Anndalor',
               'Biogeography',
               'Halisan',
               'Kanajiho',
               'Monêfor',
               'Riihiya',
               'Tohnipras',
              ],
            },
            {
              text: 'History',
              collapsible: true,
              prefix: 'History/',
              children: [
                {
                  text: 'Nations & States',
                  collapsible: true,
                  prefix: 'Nations & States/',
                  children: [
                    'Arenfürich',
                    'Arwyn Tribes',
                    'Bergheim',
                    'Duichkor',
                    'Gytrima',
                    'The Hythean Empire',
                  ],
                },
                'Chronology.md',
                'Hythean Fundamental Theory',
                'Organizations',
              ],
            },
            {
              text: 'Intuitive Phenomena & Theory',
              collapsible: true,
              prefix: 'Intuitive Phenomena & Theory/',
              children: [
                {
                  text: 'Applied Phlogistics',
                  collapsible: true,
                  prefix: 'Applied Phlogistics/',
                  children: [
                    'Artifice',
                    'Firekeeping',
                    'Ghostbreathing',
                    'Hagnomy',
                    'Immersion',
                    'Lightburning',
                    'Meldcraft',
                    'Phlogistic Computing',
                    'Psychomorphism',
                    'Soulforging',
                    'Soulkeeping',
                    'Telecorporation',
                  ],
                },
                {
                  text: 'Pure Phlogistics',
                  collapsible: true,
                  prefix: 'Pure Phlogistics/',
                  children: [
                    'Abstraction Drag',
                    'Conscious Plane',
                    'Dynamic Space Theory',
                    'Engram',
                    'Intention Field',
                    'Paradigms',
                    'Phlogistician',
                    'Phlogistics',
                    'Soul',
                    'Soulfire',
                    'The Phlogistic Model',
                  ],
                },
                {
                  text: 'Soulfire',
                  collapsible: true,
                  prefix: 'Soulfire/',
                  children: [
                    {
                      text: 'Interactions',
                      collapsible: true,
                      prefix: 'Interactions/',
                      children: [
                        'Coalescence',
                        'Combustion',
                        'Coupling',
                        'Infusion',
                        'Spin Friction',
                      ],
                    },
                    'Flamescript',
                    'Gimyndine',
                    'Phantasms',
                    'Soul Assertion'
                  ],
                },
                'Firekeeper',
                'Flamebearer',
                'Flamescribe',
              ],
            },
            {
              text: 'Natural Sciences',
              collapsible: true,
              prefix: 'Natural Sciences/',
              children: [
                {
                  text: 'Biology',
                  collapsible: true,
                  prefix: 'Biology/',
                  children: [
                    {
                      text: 'Conditions',
                      collapsible: true,
                      prefix: 'Conditions/',
                      children: [
                        'Aphantasia',
                        'Lucence',
                      ],
                    },
                    {
                      text: 'Sapient Species',
                      collapsible: true,
                      prefix: 'Sapient Species/',
                      children: [
                        'Consciousness',
                        'Kuthjïuman',
                        'Llantakúna',
                        'Rokajun',
                        'Tiangêngzhé',
                        'Zäkhisny',
                      ],
                    },
                    'Animal Species',
                    'Biological Conventions',
                    'Corporeal Immortality',
                    'Familial Genetics',
                    'Intuition',
                    'Pigmentation',
                    'Plant Species',
                    'Pneumasensitivity',
                  ],
                },
                'Astronomy',
              ],
            },
            {
              text: 'Technology',
              collapsible: true,
              prefix: 'Technology/',
              children: [
                {
                  text: 'Blackfire Devices',
                  collapsible: true,
                  prefix: 'Blackfire Devices/',
                  children: [
                    'Blackfire Rifle',
                    'Common Blackfire Devices',
                    'Gimtorch',
                    'Lightclock',
                    'Áren Monorail',
                  ],
                },
                {
                  text: 'Highflame Instruments',
                  collapsible: true,
                  prefix: 'Highflame Instruments/',
                  children: [
                    'Crucibles',
                    'Frames',
                    'Skystilts',
                    'Sliverwatches',
                  ],
                },
                {
                  text: 'Materials',
                  collapsible: true,
                  prefix: 'Materials/',
                  children: [
                    {
                      text: 'Pneumaphilics',
                      collapsible: true,
                      prefix: 'Pneumaphilics/',
                      children: [
                        'Adamant',
                        'Flash Quartz',
                        'Pneumaphilic Materials',
                      ],
                    },
                    'Dreamleaf Juice',
                    'Goldwood Paper',
                    'Lazur',
                    'Melded Alloy',
                    'Pneumaphobic Materials',
                    'Silver-steel',
                    'Torhith',
                  ],
                },
                {
                  text: 'Notable Engrams',
                  collapsible: true,
                  prefix: 'Notable Engrams/',
                  children: [
                    'Oversense',
                    'Storm’s Harmony',
                  ],
                },
                {
                  text: 'Weapons and Military Devices',
                  collapsible: true,
                  prefix: 'Weapons and Military Devices/',
                  children: [
                    'Enjärl BW-14',
                    'Powderblade',
                    'Powderstaff',
                    'Rodgun',
                    'Slug-catcher',
                    'SR87',
                  ],
                },
                'Kindlegem',
              ],
            },
          ],
        },
      ],
      '/writings/': 'heading',
      '/posts/': 'heading',
    },
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          path: '/updates/',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Updates',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})

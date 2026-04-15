import { viteBundler } from '@vuepress/bundler-vite'
import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
import { defineUserConfig } from 'vuepress'

import path from "path";
import fs from "fs";

const getSidebarItems = (dir, capitalizing) => {
  const items = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  files.sort(function(a, b) {
    var aIsDir = a.isDirectory(),
        bIsDir = b.isDirectory();
    
    if (aIsDir && !bIsDir) {
        return -1;
    }

    if (!aIsDir && bIsDir) {
        return 1;
    }

    return 1;
  })

  files.forEach((file) => {
    if (file.isDirectory() && file.name !== ".vuepress" && file.name !== ".Trash-1000") {
      const folderName = file.name;
      const folderPath = path.join(dir, folderName);
      const children = fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter((child) => child.isFile() && child.name.endsWith(".md"))
        .map((child) => child.name.replace(".md", ""));

      if (children.length === 1 && children[0] === "README") {
        // Folder with just README.md
        const text = capitalizing ? folderName.replace(/-/g, " ").toUpperCase() : folderName.replace(/-/g, " ")
        items.push({
          text: text,
          link: `/${folderName}/`,
        });
      } else {
        // Folder with other markdown files 
        const text = capitalizing ? folderName.replace(/-/g, " ").toUpperCase() : folderName.replace(/-/g, " ")
        items.push({
          text: text,
          path: `/${folderName}/`,
          collapsible: true,
          children: getSidebarItems(path.join(dir,folderName + "/"), capitalizing)//children.filter((child) => child !== "README"),
        });
      }
    }
    if (!file.isDirectory() && file.name !== 'README.md' && file.name.split(".")[1] == "md") {
      const fileName = file.name;
      const mantissa = fileName.split(".")[0];
      const relativeDir = dir.slice(dir.indexOf("docs")+4);
      items.push({
        link: `${path.join(relativeDir, mantissa)}`,
        text: mantissa,
      });
    }
  });
  
  return items;
};

const generatedSidebar = {
      '/The_Aliffrume_Encyclopedia/' : getSidebarItems(path.resolve(__dirname, "../The_Aliffrume_Encyclopedia/"), true),
      '/writings/': getSidebarItems(path.resolve(__dirname, "../writings/"), false),
      '/updates/': getSidebarItems(path.resolve(__dirname, "../updates/"), false),
};

export default defineUserConfig({
  lang: 'en-US',
  head: [[ 'link', {rel: 'icon', type:'image/png', sizes: '16x16', href: '/Idealis/images/favicon-16x16.png'}]],
  title: 'Ad Idealis',
  description: 'Wiki, Updates, and Writings',
  base: "/Idealis/",

  theme: defaultTheme({
    logo: '/images/andiurne600orangeIncandescent.png',
    colorMode: 'dark',
    colorModeSwitch: false,

    contributors: false,
    navbar: [
      {
        text: 'News',
        link: '/updates/',
      },
      {
        text: 'Writings',
        link: '/writings/',
      },
      {
        text: 'Encyclopedia',
        link: '/The_Aliffrume_Encyclopedia/',
      },
      
    ],

    sidebar: generatedSidebar,

  }),

  plugins: [
    markdownStylizePlugin({
      align: true
      //options
    }),
    sitemapPlugin({
      hostname: "https://jycartha.github.io/Wyrdfant/",
      devServer: true,
      devHostname: "http://localhost:8080/Wyrdfant/"
    }),
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('updates/') : false,

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

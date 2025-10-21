import { CodeTabs } from "/home/devinr/Documents/Wyrdfant/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_c9c8d08a6d22644b015b6483a28b3aa5/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/devinr/Documents/Wyrdfant/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_c9c8d08a6d22644b015b6483a28b3aa5/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/devinr/Documents/Wyrdfant/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_c9c8d08a6d22644b015b6483a28b3aa5/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-TW",

  title: "臺灣閩南語按呢寫",
  description: "臺灣閩南語按呢寫綫上閲覽",

  base: "/tai-gi-an-ne-sia/",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: [
      {
        text: "首頁",
        link: "/",
      },
      {
        text: "正文",
        link: "/contents/",
      },
    ],
    sidebar: {
      "/contents/": [
        {
          text: "目錄",
          link: "/contents/",
        },
        {
          text: "第 265 - 299 期",
          prefix: "/contents/",
          children: Array.from({ length: 35 }, (_, i) => ({
            text: `第 ${265 + i} 期`,
            link: `annesia${265 + i}`,
          })),
          collapsible: true,
        },
        {
          text: "第 300 - 399 期",
          prefix: "/contents/",
          children: Array.from({ length: 100 }, (_, i) => ({
            text: `第 ${300 + i} 期`,
            link: `annesia${300 + i}`,
          })),
          collapsible: true,
        },
        {
          text: "第 400 - 499 期",
          prefix: "/contents/",
          children: Array.from({ length: 100 }, (_, i) => ({
            text: `第 ${400 + i} 期`,
            link: `annesia${400 + i}`,
          })),
          collapsible: true,
        },
        {
          text: "第 500 - 544 期",
          prefix: "/contents/",
          children: Array.from({ length: 45 }, (_, i) => ({
            text: `第 ${500 + i} 期`,
            link: `annesia${500 + i}`,
          })),
          collapsible: true,
        },
      ],
    },
    sidebarDepth: 1,
  }),

  bundler: viteBundler(),
});

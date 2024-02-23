import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  base: "/notes/",
  title: "Felity Notes",
  description: "随缘笔记，仅供个人学习使用",
  icon: "/felity-icon.png",
  logo: {
    light: "/felity-light-logo.png",
    dark: "/felity-dark-logo.png",
  },
  globalStyles: path.join(__dirname, "src/assets/", "global.css"),
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/120805087/notes",
      },
    ],
    searchPlaceholderText: "搜索",
    prevPageText: "上一页",
    nextPageText: "下一页",
    footer: {
      message: "© 2024 Felity. All Rights Reserved. ",
    },
  },
});

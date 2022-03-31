import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy"; // @vitejs/plugin-legacy插件为传统浏览器提供支持
import vue from "@vitejs/plugin-vue";
import path from "path";

const projectRootDir = path.resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      "@": projectRootDir,
      "@src": path.resolve(projectRootDir, "src"),
      "@components": path.resolve(projectRootDir, "src/components"),
      "@assets": path.resolve(projectRootDir, "src/assets"),
    },
  },
});

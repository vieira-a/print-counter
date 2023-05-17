import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// Caminho absoluto para a pasta 'src'
const srcPath = resolve(__dirname, "src");

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      // Configuração das importações absolutas
      "@/": srcPath + "/",
    },
  },
  server: {
    host: true,
  },
});

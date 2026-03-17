/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html", "json-summary", "json"],
      reportsDirectory: "./coverage",
      reportOnFailure: true,
      include: ["./src/tests/*.test.{ts,tsx}"],
      exclude: [
        "node_modules/",
        "dist/",
        "vite.config.ts",
        "**/*.d.ts",
        "**/*.config.{ts,js}",
        "**/setupTests.ts",
        "src/vite-env.d.ts",
        "src/index.css",
        "src/main.tsx",
        "src/types/**",
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  }
})

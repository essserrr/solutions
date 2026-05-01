import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlBaselineOnly = !!process.env.PLAYWRIGHT_HTML_BASELINE;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  timeout: 120_000,
  expect: {
    timeout: 30_000,
    toHaveScreenshot: {
      /* Stricter than defaults: catch smaller layout/visual drift vs baseline PNGs. */
      maxDiffPixelRatio: 0,
      threshold: 0,
    },
  },
  use: {
    baseURL: "http://127.0.0.1:5173",
    trace: "on-first-retry",
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: htmlBaselineOnly
    ? undefined
    : {
        command: "pnpm exec vite --host 127.0.0.1 --port 5173",
        cwd: __dirname,
        url: "http://127.0.0.1:5173",
        reuseExistingServer: !process.env.CI,
      },
});

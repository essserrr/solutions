import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { expect, test } from "@playwright/test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Repository root (parent of `gearbox-spa/`, contains the reference HTML files). */
const repoRoot = path.join(__dirname, "..", "..");

const htmlBaseline = !!process.env.PLAYWRIGHT_HTML_BASELINE;

const pages = [
  {
    id: "stablecoins",
    htmlFile: "leverage-for-stablecoins.html",
    appPath: "/stablecoins",
    snapshotName: "identity-stablecoins.png",
  },
  {
    id: "rwa",
    htmlFile: "leverage-for-rwa.html",
    appPath: "/",
    snapshotName: "identity-rwa.png",
  },
] as const;

async function preparePageForScreenshot(page: import("@playwright/test").Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addStyleTag({
    content: `
      *,*::before,*::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      #tweaks-panel,
      .tweaks-panel {
        display: none !important;
      }
    `,
  });
}

test.describe("Visual identity: app vs static HTML reference", () => {
  for (const p of pages) {
    test(`${p.id}: ${htmlBaseline ? "record baseline from HTML" : "matches HTML baseline"}`, async ({
      page,
    }) => {
      await preparePageForScreenshot(page);

      if (htmlBaseline) {
        const htmlPath = path.join(repoRoot, p.htmlFile);
        await page.goto(pathToFileURL(htmlPath).href, {
          waitUntil: "networkidle",
        });
      } else {
        await page.goto(p.appPath, { waitUntil: "networkidle" });
      }

      await page.waitForLoadState("domcontentloaded");
      await page.evaluate(() => document.fonts.ready);

      // Full page so the footer is included (SPA keeps footer outside `main#page`).
      await expect(page).toHaveScreenshot(p.snapshotName, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});

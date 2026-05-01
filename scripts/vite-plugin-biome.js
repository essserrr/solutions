import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** Debounce in ms so we don't run biome on every HMR. */
const DEBOUNCE_MS = 1500;

/**
 * Vite plugin that runs `biome check` in dev mode after each build.
 * Streams output to the terminal so lint errors are visible.
 */
export function vitePluginBiome() {
  let debounceTimer = null;
  let pendingRun = false;

  function runBiomeCheck() {
    if (pendingRun) return;
    pendingRun = true;
    const child = spawn("npx", ["biome", "check"], {
      cwd: root,
      stdio: "inherit",
      shell: true,
    });
    child.on("close", () => {
      pendingRun = false;
    });
  }

  function scheduleBiomeCheck() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      runBiomeCheck();
    }, DEBOUNCE_MS);
  }

  return {
    name: "vite-plugin-biome",
    apply: "serve",
    buildEnd() {
      scheduleBiomeCheck();
    },
  };
}

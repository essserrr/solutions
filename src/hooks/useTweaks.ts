import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "gearbox-tweaks";

function getInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { palette: "light", density: "compact" };
}

export function useTweaks() {
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    document.body.setAttribute("data-palette", state.palette);
    document.body.setAttribute("data-density", state.density);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setPalette = useCallback(palette => {
    setState(s => ({ ...s, palette }));
  }, []);

  const setDensity = useCallback(density => {
    setState(s => ({ ...s, density }));
  }, []);

  return {
    palette: state.palette,
    density: state.density,
    setPalette,
    setDensity,
  };
}

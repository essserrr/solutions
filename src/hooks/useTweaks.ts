import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "gearbox-tweaks";

type TweaksState = { palette: string; density: string };

function getInitialState(): TweaksState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as TweaksState;
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

  const setPalette = useCallback((palette: string) => {
    setState((s: TweaksState) => ({ ...s, palette }));
  }, []);

  const setDensity = useCallback((density: string) => {
    setState((s: TweaksState) => ({ ...s, density }));
  }, []);

  return {
    palette: state.palette,
    density: state.density,
    setPalette,
    setDensity,
  };
}

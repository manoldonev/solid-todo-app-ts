import { createMediaQuery } from '@solid-primitives/media';
import { createStorageSignal } from '@solid-primitives/storage';
import type { Signal } from 'solid-js';
import { createEffect } from 'solid-js';

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

const useColorMode = (): Signal<ColorMode | null> => {
  const isDarkModePreferred = createMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = createStorageSignal(
    's-color-mode',
    isDarkModePreferred() ? ColorMode.Dark : ColorMode.Light,
  );

  createEffect(() => {
    const root = window.document.documentElement;
    if (colorMode() === ColorMode.Dark) {
      root.classList.add(ColorMode.Dark);
    } else {
      root.classList.remove(ColorMode.Dark);
    }
  });

  return [colorMode, setColorMode];
};

export { useColorMode, ColorMode };

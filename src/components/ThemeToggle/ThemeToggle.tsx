import type { Component } from 'solid-js';
import { HiSolidMoon as MoonIcon, HiSolidSun as SunIcon } from 'solid-icons/hi';
import { ColorMode, useColorMode } from './primitives/useColorMode';

const ThemeToggle: Component<{ class?: string }> = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDarkMode = (): boolean => colorMode() === ColorMode.Dark;

  return (
    <button
      type="button"
      onClick={() => setColorMode(isDarkMode() ? ColorMode.Light : ColorMode.Dark)}
      aria-label="Toggle Theme"
      class={`rounded-full p-2.5 text-sm text-on-primary/75 ring-0 hover:text-background ${props.class ?? ''}`}
    >
      <SunIcon class={`${!isDarkMode() ? 'hidden' : ''} h-5 w-5`} />
      <MoonIcon class={`${isDarkMode() ? 'hidden' : ''} h-5 w-5`} />
    </button>
  );
};

export { ThemeToggle };

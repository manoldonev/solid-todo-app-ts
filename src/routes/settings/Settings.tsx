import type { Component } from 'solid-js';
import { ThemeToggle } from '../../components/ThemeToggle';

const Settings: Component = () => {
  return (
    <div data-testid="settings" class="min-h-screen bg-background p-2 text-on-background transition-colors md:p-4">
      <p class="hidden md:block">Settings</p>
      <div class="flex items-center gap-2 rounded-md bg-primary/90 p-2 text-on-primary md:hidden">
        <span>Toggle theme:</span>
        <ThemeToggle />
      </div>
    </div>
  );
};

export { Settings };

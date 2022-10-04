import type { Component } from 'solid-js';
import { Outlet } from '@solidjs/router';
import { Header } from './Header';
import { BottomNavigation } from './Navigation';
import { Headroom, Legroom } from '../../components/Headroom';

const Layout: Component = () => {
  return (
    // NOTE: cannot use Fragment here as it will break the sticky header
    <div class="min-h-screen bg-background">
      <Headroom class="z-10">
        <Header />
      </Headroom>

      <main>
        <Outlet />
      </main>

      <Legroom class="z-10">
        <BottomNavigation class="md:hidden" />
      </Legroom>
    </div>
  );
};

export { Layout };

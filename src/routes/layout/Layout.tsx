import type { Component } from 'solid-js';
import { Outlet } from 'solid-app-router';
import { Header } from './Header';
import { BottomNavigation } from './Navigation';

const Layout: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomNavigation class="md:hidden" />
    </>
  );
};

export { Layout };

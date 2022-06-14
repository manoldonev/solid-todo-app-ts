import type { Component } from 'solid-js';
import { Outlet } from 'solid-app-router';
import { Header } from './Header';

const Layout: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };

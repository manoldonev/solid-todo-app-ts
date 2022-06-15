import { Link } from 'solid-app-router';
import type { Component } from 'solid-js';
import { Navigation } from '../Navigation';

const Header: Component = () => {
  return (
    <header class="w-screen bg-primary transition-colors">
      <div class="flex items-center justify-between p-4">
        <div class="grid w-full items-center md:flex">
          <div class="col-start-1 row-start-1 flex justify-start md:mr-4">
            <Link href="/">
              <h1 class="text-on-primary">Todo App</h1>
            </Link>
          </div>
        </div>

        <Navigation class="hidden md:flex" />
      </div>
    </header>
  );
};

export { Header };

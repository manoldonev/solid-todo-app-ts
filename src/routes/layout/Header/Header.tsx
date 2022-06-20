import { Link, useLocation, useNavigate } from 'solid-app-router';
import type { Component } from 'solid-js';
import { SearchBox } from '../../../components/SearchBox';
import { useQuerySignal } from '../../../signals';
import { Navigation } from '../Navigation';

const Header: Component = () => {
  const [query, setQuery] = useQuerySignal();
  const location = useLocation();
  const navigate = useNavigate();

  const handleInput = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    },
  ): void => {
    if (location.pathname !== '/tasks') {
      navigate('/tasks');
    }

    setQuery(e.currentTarget.value);
  };

  return (
    <header class="w-screen bg-primary transition-colors">
      <div class="flex items-center justify-between p-4">
        <div class="grid w-full items-center md:flex">
          <div class="col-start-1 row-start-1 flex justify-start md:mr-4">
            <Link href="/">
              <h1 class="text-on-primary">Todo App</h1>
            </Link>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            role="search"
            class="pointer-events-none col-start-1 row-start-1 md:mx-auto md:w-1/2"
          >
            <SearchBox value={query()} onInput={(e) => handleInput(e)} />
          </form>
        </div>

        <Navigation class="hidden md:flex" />
      </div>
    </header>
  );
};

export { Header };

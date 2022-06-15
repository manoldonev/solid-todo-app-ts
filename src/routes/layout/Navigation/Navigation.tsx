import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { NavLink } from 'solid-app-router';
import { navigationItems } from './navigationItems';

const Navigation: Component<{ class?: string }> = (props) => {
  return (
    <nav data-testid="top-navigation" class={`w-auto items-center text-on-primary ${props.class ?? ''}`}>
      <For each={navigationItems}>
        {(item) => (
          <NavLink href={`/${item}`} class="mr-4 block" activeClass="underline">
            <span class="capitalize">{item}</span>
          </NavLink>
        )}
      </For>
    </nav>
  );
};

export { Navigation };

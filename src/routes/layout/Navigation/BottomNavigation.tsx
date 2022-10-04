import type { Component, JSXElement } from 'solid-js';
import { Match, For, Switch } from 'solid-js';
import { NavLink } from '@solidjs/router';
import {
  HiOutlineAdjustments as AdjustmentsIcon,
  HiOutlineChartSquareBar as ChartSquareBarIcon,
  HiOutlineClipboardList as ClipboardListIcon,
} from 'solid-icons/hi';
import { navigationItems } from './navigationItems';

const mapNavigationIcon = (item: string): JSXElement => {
  return (
    <Switch>
      <Match when={item === 'tasks'}>
        <ClipboardListIcon class="mx-auto mb-1 h-6 w-6" />
      </Match>
      <Match when={item === 'analytics'}>
        <ChartSquareBarIcon class="mx-auto mb-1 h-6 w-6" />
      </Match>
      <Match when={item === 'settings'}>
        <AdjustmentsIcon class="mx-auto mb-1 h-6 w-6" />
      </Match>
    </Switch>
  );
};

const BottomNavigation: Component<{ class?: string }> = (props) => {
  return (
    <nav
      data-testid="bottom-navigation"
      class={`flex justify-between bg-primary text-xs text-on-primary ${props.class ?? ''}`}
    >
      <For each={navigationItems}>
        {(item) => (
          <NavLink
            href={`/${item}`}
            class="w-full p-3 text-center transition duration-300"
            activeClass="bg-primary-variant"
          >
            {mapNavigationIcon(item)}
            <span class="capitalize">{item}</span>
          </NavLink>
        )}
      </For>
    </nav>
  );
};

export { BottomNavigation };

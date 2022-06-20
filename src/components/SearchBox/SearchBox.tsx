import { HiOutlineSearch as SearchIcon } from 'solid-icons/hi';
import type { Component } from 'solid-js';

const SearchBox: Component<{
  value?: string | number | string[] | undefined;
  onInput?: (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    },
  ) => void;
}> = (props) => {
  return (
    <div class="flex justify-end">
      <input
        id="search"
        type="search"
        value={props.value}
        onInput={(e) => props.onInput?.(e)}
        placeholder="Search"
        class="peer pointer-events-auto z-10 h-12 w-0 rounded-l-sm bg-primary-container text-lg text-on-primary-container placeholder-on-primary-container/75 outline-none duration-300 focus:w-[calc(100%_-_3rem+_1px)] focus:px-5 md:w-[calc(100%_-_3rem+_1px)] md:px-5"
      />
      <label
        for="search"
        aria-label="Search"
        class="pointer-events-auto -ml-px select-none rounded-sm bg-primary-container p-3 text-on-primary-container peer-focus:pointer-events-none peer-focus:rounded-l-none md:rounded-l-none"
      >
        <SearchIcon class="pointer-events-none h-6 w-6 text-on-primary-container" />
      </label>
    </div>
  );
};

export { SearchBox };

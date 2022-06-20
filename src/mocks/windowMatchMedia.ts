// https://github.com/dyakovk/jest-matchmedia-mock
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { vi } from 'vitest';

interface MediaQueryList {
  readonly matches: boolean;
  readonly media: string;
  onchange: MediaQueryListener | null;
  /** @deprecated */
  addListener: (listener: MediaQueryListener) => void;
  /** @deprecated */
  removeListener: (listener: MediaQueryListener) => void;
  addEventListener: (type: 'change', listener: MediaQueryListener) => void;
  removeEventListener: (type: 'change', listener: MediaQueryListener) => void;
  dispatchEvent: (event: Event) => boolean;
}

type MediaQueryListener = (this: MediaQueryList, ev: MediaQueryListEvent) => void;

// eslint-disable-next-line import/no-default-export
export default class MatchMedia {
  private mediaQueries: {
    [key: string]: MediaQueryListener[];
  } = {};

  private mediaQueryList!: MediaQueryList;

  private currentMediaQuery!: string;

  constructor() {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: (query: string): MediaQueryList => {
        this.mediaQueryList = {
          matches: query === this.currentMediaQuery,
          media: query,
          onchange: null,
          addListener: (listener) => {
            this.addListener(query, listener);
          },
          removeListener: (listener) => {
            this.removeListener(query, listener);
          },
          addEventListener: (type, listener) => {
            this.addListener(query, listener);
          },
          removeEventListener: (type, listener) => {
            this.removeListener(query, listener);
          },
          dispatchEvent: vi.fn(),
        };

        return this.mediaQueryList;
      },
    });
  }

  /**
   * Adds a new listener function for the specified media query
   * @private
   */
  private addListener(mediaQuery: string, listener: MediaQueryListener): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.mediaQueries[mediaQuery] == null) {
      this.mediaQueries[mediaQuery] = [];
    }

    const query = this.mediaQueries[mediaQuery];
    const listenerIndex = query.indexOf(listener);

    if (listenerIndex !== -1) return;
    query.push(listener);
  }

  /**
   * Removes a previously added listener function for the specified media query
   * @private
   */
  private removeListener(mediaQuery: string, listener: MediaQueryListener): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.mediaQueries[mediaQuery] == null) return;

    const query = this.mediaQueries[mediaQuery];
    const listenerIndex = query.indexOf(listener);

    if (listenerIndex === -1) return;
    query.splice(listenerIndex, 1);
  }

  /**
   * Updates the currently used media query,
   * and calls previously added listener functions registered for this media query
   * @public
   */
  public useMediaQuery(mediaQuery: string): never | void {
    if (typeof mediaQuery !== 'string') throw new Error('Media Query must be a string');

    this.currentMediaQuery = mediaQuery;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.mediaQueries[mediaQuery] == null) return;

    const mqListEvent: Partial<MediaQueryListEvent> = {
      matches: true,
      media: mediaQuery,
    };

    this.mediaQueries[mediaQuery].forEach((listener) => {
      listener.call(this.mediaQueryList, mqListEvent as MediaQueryListEvent);
    });
  }

  /**
   * Returns an array listing the media queries for which the matchMedia has registered listeners
   * @public
   */
  public getMediaQueries(): string[] {
    return Object.keys(this.mediaQueries);
  }

  /**
   * Returns a copy of the array of listeners for the specified media query
   * @public
   */
  public getListeners(mediaQuery: string): MediaQueryListener[] {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.mediaQueries[mediaQuery] == null) return [];
    return this.mediaQueries[mediaQuery].slice();
  }

  /**
   * Clears all registered media queries and their listeners
   * @public
   */
  public clear(): void {
    this.mediaQueries = {};
  }

  /**
   * Clears all registered media queries and their listeners,
   * and destroys the implementation of `window.matchMedia`
   * @public
   */
  public destroy(): void {
    this.clear();
    delete window.matchMedia;
  }
}

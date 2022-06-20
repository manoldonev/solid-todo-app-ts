import { render, screen } from 'solid-testing-library';
import userEvent from '@testing-library/user-event';
import { expect, describe, test, vi } from 'vitest';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
  test('renders without crashing', async () => {
    const { unmount } = render(() => <SearchBox value="" />);

    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toBeVisible();

    unmount();
  });

  test('is focusable', () => {
    const { unmount } = render(() => <SearchBox value="" />);

    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toBeVisible();
    expect(inputElement).not.toHaveFocus();

    inputElement.focus();
    expect(inputElement).toHaveFocus();

    unmount();
  });

  test('change value with event notification', async () => {
    const inputHandler = vi.fn();
    const { unmount } = render(() => <SearchBox value="" onInput={inputHandler} />);

    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toHaveValue('');

    const testValue = 'test value';
    const [firstLetter, ...rest] = testValue;

    inputHandler.mockImplementationOnce(
      (
        e: InputEvent & {
          currentTarget: HTMLInputElement;
          target: Element;
        },
      ) => {
        expect(e.currentTarget.value).toEqual(firstLetter);
      },
    );

    const user = userEvent.setup();

    await user.type(inputElement, firstLetter);
    expect(inputElement).toHaveValue(firstLetter);
    expect(inputHandler).toHaveBeenCalledTimes(1);

    await user.type(inputElement, rest.join(''));
    expect(inputElement).toHaveValue('test value');
    expect(inputHandler).toHaveBeenCalledTimes('test value'.length);

    unmount();
  });

  test('delete value with event notification', async () => {
    const inputHandler = vi.fn();
    const { unmount } = render(() => <SearchBox value="" onInput={inputHandler} />);

    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toHaveValue('');

    const testValue = 'test value';

    const user = userEvent.setup();

    await user.type(inputElement, testValue);
    expect(inputElement).toHaveValue(testValue);

    inputHandler.mockClear();
    inputHandler.mockImplementationOnce(
      (
        e: InputEvent & {
          currentTarget: HTMLInputElement;
          target: Element;
        },
      ) => {
        expect(e.currentTarget.value).toEqual(testValue.slice(0, -1));
      },
    );

    await user.type(inputElement, '{backspace}');
    expect(inputHandler).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue(testValue.slice(0, -1));

    inputHandler.mockClear();
    inputHandler.mockImplementationOnce(
      (
        e: InputEvent & {
          currentTarget: HTMLInputElement;
          target: Element;
        },
      ) => {
        expect(e.currentTarget.value).toBe('');
      },
    );

    await user.clear(inputElement);
    expect(inputHandler).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue('');

    unmount();
  });

  // NOTE: apparently asserting width changes based on
  // :focus pseudo-class is not currently possible in jsdom
  test.todo('expands / collapses based on focus state');
});

import type { Component } from 'solid-js';
import { render, screen, waitFor, waitForElementToBeRemoved, within } from 'solid-testing-library';
import { Router } from '@solidjs/router';
import { QueryClientProvider, QueryCache, QueryClient } from '@tanstack/solid-query';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { App } from './App';
import { server } from '../mocks/msw/server';
import { mockTodosQuery } from '../generated';

const queryErrorHandler = vi.fn();

const queryCache = new QueryCache({
  onError: queryErrorHandler,
});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    // eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
    error: () => {},
  },
});

const TestApp: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  );
};

/*
  NOTE: it is not possible to properly test tailwind responsive ui behavior
  with jsdom. Generally jsdom neither loads the application css files,
  nor does it support media queries. We can address the former by manually
  assembling and injecting the tailwind css styles (see vitest.setup.ts),
  however, the latter is a bigger and [currently] unsolvable problem. Mocking
  media query support (window.matchMedia) is possible but this only patches scenarios where the component under test actually calls window.matchMedia(...) programmatically. In our [tailwind] scenario we are dynamically injecting the css (including the @media statements for sm/md/lg/etc. screen modifiers) but jsdom does not trigger media query computation hence the screen modifiers remain inactive. As tailwind is a mobile-first library this effectively means we are stuck with the mobile view for testing).
*/
describe('on mobile screen', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    queryCache.clear();
  });

  test('renders without crashing', async () => {
    const { unmount } = render(() => <TestApp />);

    const linkElement = screen.getByText(/todo app/i);
    expect(linkElement).toBeVisible();

    const searchFormElement = screen.getByRole('search');
    expect(searchFormElement).toBeVisible();

    const listElement = await screen.findByRole('list', undefined, { timeout: 5000 });
    expect(listElement).toBeVisible();

    const listScope = within(listElement);
    const itemElements = await listScope.findAllByRole('listitem');
    expect(itemElements).toHaveLength(10);

    const topNavElement = screen.getByTestId('top-navigation');
    expect(topNavElement).not.toBeVisible();

    const bottomNavElement = screen.getByTestId('bottom-navigation');
    expect(bottomNavElement).toBeVisible();

    expect(queryErrorHandler).not.toHaveBeenCalled();

    unmount();
  });

  test('handles server error gracefully', async () => {
    server.use(
      mockTodosQuery((_req, res, ctx) => {
        return res.once(ctx.status(500), ctx.errors([{ message: 'Mocked server error' }]));
      }),
    );

    const { unmount } = render(() => <TestApp />);

    await waitFor(() => expect(queryErrorHandler).toHaveBeenCalledTimes(1));

    const linkElement = screen.getByText(/todo app/i);
    expect(linkElement).toBeVisible();

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    const noItemsElement = screen.getByText(/no items available/i);
    expect(noItemsElement).toBeVisible();

    const topNavElement = screen.getByTestId('top-navigation');
    expect(topNavElement).not.toBeVisible();

    const bottomNavElement = screen.getByTestId('bottom-navigation');
    expect(bottomNavElement).toBeVisible();

    unmount();
  });

  test('renders correct bottom navigation items', async () => {
    const { unmount } = render(() => <TestApp />);

    const listElement = await screen.findByRole('list');
    expect(listElement).toBeVisible();

    const bottomNavElement = screen.getByTestId('bottom-navigation');
    const navScope = within(bottomNavElement);
    const linkElements = navScope.getAllByRole('link');
    expect(linkElements).toHaveLength(3);

    const tasksElement = linkElements[0];
    expect(tasksElement).toBeVisible();
    expect(tasksElement).toHaveTextContent(/tasks/);
    expect(tasksElement).toHaveClass('bg-primary-variant');

    const analyticsElement = linkElements[1];
    expect(analyticsElement).toBeVisible();
    expect(analyticsElement).toHaveTextContent(/analytics/);
    expect(analyticsElement).not.toHaveClass('bg-primary-variant');

    const settingsElement = linkElements[2];
    expect(settingsElement).toBeVisible();
    expect(settingsElement).toHaveTextContent(/settings/);
    expect(settingsElement).not.toHaveClass('bg-primary-variant');

    unmount();
  });

  test('switches tabs through bottom navigation', async () => {
    const { unmount } = render(() => <TestApp />);

    let listElement = await screen.findByRole('list');
    expect(listElement).toBeVisible();

    const bottomNavElement = screen.getByTestId('bottom-navigation');
    const navScope = within(bottomNavElement);
    const user = userEvent.setup();

    const analyticsLink = navScope.getByText(/analytics/i);
    expect(analyticsLink).toBeVisible();

    await user.click(analyticsLink);
    const analyticsTabElement = await screen.findByTestId('analytics', undefined, { timeout: 5000 });
    expect(analyticsTabElement).toBeVisible();
    expect(listElement).not.toBeVisible();

    const settingsLink = navScope.getByText(/settings/i);
    expect(settingsLink).toBeVisible();

    await user.click(settingsLink);
    const settingsTabElement = await screen.findByTestId('settings');
    expect(settingsTabElement).toBeVisible();
    expect(analyticsTabElement).not.toBeVisible();
    expect(listElement).not.toBeVisible();

    const tasksLink = navScope.getByText(/tasks/i);
    expect(tasksLink).toBeVisible();

    await user.click(tasksLink);
    listElement = await screen.findByRole('list');
    expect(listElement).toBeVisible();
    expect(analyticsTabElement).not.toBeVisible();
    expect(settingsTabElement).not.toBeVisible();

    unmount();
  });

  test('create todo item', async () => {
    const { unmount } = render(() => <TestApp />);

    const listElement = await screen.findByRole('list', undefined, { timeout: 5000 });
    expect(listElement).toBeVisible();
    const listScope = within(listElement);

    let itemElements = await listScope.findAllByRole('listitem');
    expect(itemElements).toHaveLength(10);

    const fabElement = screen.getByTestId('cta-button');
    expect(fabElement).toBeVisible();

    const user = userEvent.setup();
    await user.click(fabElement);

    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toBeVisible();

    const modalScope = within(modalElement);
    const inputElements = modalScope.getAllByRole('textbox');
    expect(inputElements).toHaveLength(2);

    const noteElement = modalScope.getByPlaceholderText(/note/i);
    const testValue = 'Add the qwerty!';

    await user.type(noteElement, testValue);

    const saveButton = modalScope.getByText(/save/i);
    expect(saveButton).toBeVisible();

    await user.click(saveButton);
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));

    expect(await listScope.findByText(testValue)).toBeVisible();

    itemElements = listScope.getAllByRole('listitem');
    expect(itemElements[0]).toHaveTextContent(testValue);

    unmount();
  });

  test('create todo item validation', async () => {
    const { unmount } = render(() => <TestApp />);

    const listElement = await screen.findByRole('list', undefined, { timeout: 5000 });
    expect(listElement).toBeVisible();
    const listScope = within(listElement);

    let itemElements = await listScope.findAllByRole('listitem');
    expect(itemElements).toHaveLength(10);

    const fabElement = screen.getByTestId('cta-button');
    expect(fabElement).toBeVisible();

    const user = userEvent.setup();
    await user.click(fabElement);

    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toBeVisible();

    const modalScope = within(modalElement);
    const saveButton = modalScope.getByText(/save/i);
    expect(saveButton).toBeVisible();

    await user.click(saveButton);

    const errorElements = await modalScope.findAllByText(/at least one of the fields is required/i);

    expect(errorElements).toHaveLength(2);
    errorElements.forEach((errorElement) => expect(errorElement).toBeVisible());

    const inputElements = modalScope.getAllByRole('textbox');
    expect(inputElements).toHaveLength(2);

    const titleElement = modalScope.getByPlaceholderText(/title/i);
    const testValue = 'Add the deadbeef!';

    await user.type(titleElement, testValue);

    await user.click(saveButton);

    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));

    expect(await listScope.findByText(testValue)).toBeVisible();

    itemElements = listScope.getAllByRole('listitem');
    expect(itemElements[0]).toHaveTextContent(testValue);

    unmount();
  });

  test('cancel create todo item should have no side effects', async () => {
    const { unmount } = render(() => <TestApp />);

    const listElement = await screen.findByRole('list', undefined, { timeout: 5000 });
    expect(listElement).toBeVisible();
    const listScope = within(listElement);

    let itemElements = await listScope.findAllByRole('listitem');
    expect(itemElements).toHaveLength(10);
    const firstElement = itemElements[0];

    const fabElement = screen.getByTestId('cta-button');
    expect(fabElement).toBeVisible();

    const user = userEvent.setup();
    await user.click(fabElement);

    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toBeVisible();

    const modalScope = within(modalElement);
    const closeButton = modalScope.getByLabelText(/close/i);
    expect(closeButton).toBeVisible();

    await user.click(closeButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    itemElements = listScope.getAllByRole('listitem');
    expect(itemElements[0]).toEqual(firstElement);

    unmount();
  });
});

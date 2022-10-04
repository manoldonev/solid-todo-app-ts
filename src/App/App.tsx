import type { Component } from 'solid-js';
import { Suspense, ErrorBoundary, lazy } from 'solid-js';
import { Navigate, Route, Routes } from '@solidjs/router';
import { Layout, NotFound } from '../routes';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorFallback } from './ErrorFallback';

const Tasks = lazy(async () => import('../routes/tasks').then((module) => ({ default: module.Tasks })));

const Analytics = lazy(async () => import('../routes/analytics').then((module) => ({ default: module.Analytics })));

const Settings = lazy(async () => import('../routes/settings').then((module) => ({ default: module.Settings })));

const App: Component = () => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error.toString()} resetErrorBoundary={reset} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Navigate href="tasks" />} />
          <Route
            path="tasks/*"
            element={
              <Suspense fallback={<LoadingIndicator class="bg-background text-on-background" />}>
                <Tasks />
              </Suspense>
            }
          />
          <Route
            path="analytics"
            element={
              <Suspense fallback={<LoadingIndicator class="bg-background text-on-background" />}>
                <Analytics />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<LoadingIndicator class="bg-background text-on-background" />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export { App };

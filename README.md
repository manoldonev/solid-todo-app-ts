![license](https://img.shields.io/github/license/manoldonev/todo-app-solid-ts?style=plastic) ![ci workflow](https://github.com/manoldonev/todo-app-solid-ts/workflows/ci/badge.svg) ![deploy workflow](https://github.com/manoldonev/todo-app-solid-ts/workflows/deploy/badge.svg)

Latest deployment available at https://manoldonev.github.io/todo-app-solid-ts/

# SolidJS Todo App

Based on the standard SolidJS TypeScript [template](https://github.com/solidjs/templates/tree/master/ts):

- Vite
- TypeScript
- ESLint
- Prettier
- pre-commit hooks
- CI / deployment GitHub workflows
- Dependency management via [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/)
- Package management via [pnpm](https://pnpm.io/)

## UX & Theming

- Mobile-first design
- Tailwind (utility-first CSS framework)
- Dark Mode Support (utilizing tailwind "class" strategy)
- Branding via custom "material design" palette (vs generic tailwind colors scheme)

## Data (Async State Management)

- GraphQL
- [WIP] `solid-query` (custom PoC port of [react-query](https://react-query.tanstack.com/) with semi-automatic query generation based on the GraphQL schema (currently using the React [codegen utilities](https://www.graphql-code-generator.com/) hence the semi-automatic part)

## Testing

- [WIP] Unit & Integration testing: Jest with Solid Testing Library setup
- Static Analysis: TypeScript & ESLint
- [MSW](https://mswjs.io/) (Mock Service Worker) API mocking (intercepting requests on the network level)

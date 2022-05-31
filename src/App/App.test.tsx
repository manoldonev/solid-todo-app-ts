import { render, screen } from 'solid-testing-library';
import { App } from './App';

describe('Todo App', () => {
  test('renders correctly', () => {
    const { unmount } = render(() => <App />);

    expect(screen.getByText(/todo app/i)).toBeInTheDocument();

    unmount();
  });
});

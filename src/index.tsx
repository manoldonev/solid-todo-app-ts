/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './App';

import './index.css';

const container = document.getElementById('root');
if (container != null) {
  render(() => <App />, container);
}

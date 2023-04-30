import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import searchApi from './store/services/searchService';

import App from './App';

export async function render(
  url: string,
  options: RenderToPipeableStreamOptions
) {
  const store = setupStore();
  await store.dispatch(searchApi.endpoints.search.initiate(''));

  const preloadedState = store.getState();
  const transformPreload = JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  );
  const injectPreload = () =>
    `<script>window.__PRELOADED_STATE__ = ${transformPreload}</script>`;

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );

  return { stream, injectPreload };
}

export const service = 3001;

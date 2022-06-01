import { render } from 'solid-js/web';
import { createRouterTree, Router } from 'solid-tiny-router';
import 'normalize.css/normalize.css';
import './styles/hljs.css';
import './styles/root.css';
import { MetaProvider } from 'solid-meta';

const routes = createRouterTree([
  {
    path: '/[scheme]',
    component: $lazy(import('./pages/[scheme]')),
  },
]);

const root = document.getElementById('app');

if (root) {
  render(
    () => (
      <MetaProvider>
        <Router
          routes={routes}
        />
      </MetaProvider>
    ),
    root,
  );
}

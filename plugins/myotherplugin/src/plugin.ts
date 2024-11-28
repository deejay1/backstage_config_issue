import {
  configApiRef,
  createApiFactory,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { myApiRef, MyClient } from './api/myapi';

export const myotherpluginPlugin = createPlugin({
  id: 'myotherplugin',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: myApiRef,
      deps: {
        configApi: configApiRef,
      },
      factory: ({ configApi }) => {
        return new MyClient({ configApi });
      },
    }),
  ],
});

export const MyotherpluginPage = myotherpluginPlugin.provide(
  createRoutableExtension({
    name: 'MyotherpluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

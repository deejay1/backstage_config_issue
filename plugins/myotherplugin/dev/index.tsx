import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myotherpluginPlugin, MyotherpluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myotherpluginPlugin)
  .addPage({
    element: <MyotherpluginPage />,
    title: 'Root Page',
    path: '/myotherplugin',
  })
  .render();

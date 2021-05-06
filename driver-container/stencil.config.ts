import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'driver-container',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      buildDir: 'stencil-components/build',
      serviceWorker: null, // disable service workers
    },
  ],
};

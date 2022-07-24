// vite.config.ts
import path from 'path';
import { readdirSync } from 'fs';
import {defineConfig} from 'vite';

const absolutePathAliases: { [key: string]: string } = {};

const srcPath = path.resolve('./src');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  server:{
    port: 8000
  },
  resolve: {
    alias: { ...absolutePathAliases },
  },
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  }
});

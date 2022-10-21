import relativeImages from "mdsvex-relative-images";
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import * as path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
  extensions: ['.md', '.svx'],
  smartypants: { dashes: 'oldschool' },
  "remarkPlugins": [relativeImages],
  "rehypePlugins": [],
  layout: {
    blog: path.join(dirname, './src/routes/blog/(text)/+layout.svelte'),
    video: path.join(dirname, './src/routes/blog/(video)/+layout.svelte')
  }
});

export default config;

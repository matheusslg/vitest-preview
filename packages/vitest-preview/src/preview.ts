import fs from 'fs';
import path from 'path';
import { CACHE_FOLDER } from './constants';
import { createCacheFolderIfNeeded } from './utils';

export function debug(): void {
  createCacheFolderIfNeeded();

  const stylesPath = path.join(CACHE_FOLDER, 'styles.css');
  let html = document.documentElement.outerHTML;

  if (fs.existsSync(stylesPath)) {
    const stylesContent = fs.readFileSync(stylesPath, 'utf-8');
    html = html.replace('</head>', `<style>${stylesContent}</style></head>`);
  }

  fs.writeFileSync(path.join(CACHE_FOLDER, 'index.html'), html);
}

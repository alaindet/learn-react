import fs from 'fs/promises';
import path from 'path';

import { Product } from './types';

// NOTE: Current working directory is the root path when executing Next.js
// Not the /pages directory
export async function loadDataFromFileSystem(): Promise<Product[]> {
  const root = process.cwd();
  const filePath = path.join(root, 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, { encoding: 'utf-8' });
  return JSON.parse(jsonData).products;
}

import path from 'path';

import { Repository } from '@/common/server';
import { Comment } from '../types';

export const commentsRepository = new Repository<Comment>(
  path.join(process.cwd(), 'features', 'comments', 'server', 'db.json'),
  'id',
);

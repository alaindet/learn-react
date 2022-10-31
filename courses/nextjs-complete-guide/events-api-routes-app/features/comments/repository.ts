import path from 'path';

import { Repository } from '@/common/repository';
import { Comment } from './types';

export const commentsRepository = new Repository<Comment>(
  path.join(process.cwd(), 'features', 'comments', 'db.json'),
  'id',
);

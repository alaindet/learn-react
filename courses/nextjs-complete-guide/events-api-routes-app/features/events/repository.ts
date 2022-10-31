import path from 'path';

import { Repository } from '@/common/repository';
import { LiveEvent } from './types';

export const eventsRepository = new Repository<LiveEvent>(
  path.join(process.cwd(), 'features', 'events', 'db.json'),
  'id',
);

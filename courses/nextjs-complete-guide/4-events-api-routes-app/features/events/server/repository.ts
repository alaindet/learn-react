import path from 'path';

import { Repository } from '@/common/server';
import { LiveEvent } from '../types';

export const eventsRepository = new Repository<LiveEvent>(
  path.join(process.cwd(), 'features', 'events', 'server', 'db.json'),
  'id',
);

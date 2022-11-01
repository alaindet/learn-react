import path from 'path';

import { Repository } from '@/common/server';
import { NewsletterSubscription } from '../types';

export const newsletterRepository = new Repository<NewsletterSubscription>(
  path.join(process.cwd(), 'features', 'newsletter', 'server', 'db.json'),
  'id',
);

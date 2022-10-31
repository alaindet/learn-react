import path from 'path';

import { Repository } from '@/common/repository';
import { NewsletterSubscription } from './types';

export const newsletterRepository = new Repository<NewsletterSubscription>(
  path.join(process.cwd(), 'features', 'newsletter', 'db.json'),
  'id',
);

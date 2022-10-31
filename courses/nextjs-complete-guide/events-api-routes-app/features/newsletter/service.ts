import { getRandomHash } from '@/common/utils';
import { newsletterRepository } from './repository';
import { CreateNewsletterSubscriptionRequest, NewsletterSubscription } from './types';

export async function createSubscription(
  request: CreateNewsletterSubscriptionRequest,
): Promise<NewsletterSubscription> {
  const id = getRandomHash(8);
  const subscription: NewsletterSubscription = { id, ...request };
  await newsletterRepository.addItem(subscription);
  return subscription;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
}

export interface CreateNewsletterSubscriptionRequest {
  email: string;
}

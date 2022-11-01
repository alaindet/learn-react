import type { NextApiRequest, NextApiResponse } from 'next';

import { createSubscription } from '@/features/newsletter/server';
import { badRequest, createResponse, methodNotAllowed, validateEmail } from '@/common/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handleSubscribeToNewsletter(req, res);
    default:
      return methodNotAllowed(res);
  }
}

async function handleSubscribeToNewsletter(req: NextApiRequest, res: NextApiResponse) {

  if (!req.body.email || !validateEmail(req.body.email as string)) {
    return badRequest(res, 'No valid email provided');
  }

  const email = req.body.email as string;
  const request = { email };
  const subscription = await createSubscription(request);

  const message = 'You subscribed to the NextEvents newsletter';
  return res.status(201).send(createResponse(message, subscription));
}

import type { NextApiRequest, NextApiResponse } from 'next';

import { createSubscription } from '@/features/newsletter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handleSubscribeToNewsletter(req, res);
    default:
      return res.status(405).send({ message: 'Method Not Allowed', data: null });
  }
}

async function handleSubscribeToNewsletter(req: NextApiRequest, res: NextApiResponse) {

  if (!req.query.email) {
    return res.status(400).send({
      message: 'No valid email provided',
      data: null,
    });
  }

  const email = req.query.email as string;
  const request = { email };
  const subscription = await createSubscription(request);

  return res.status(201).send({
    message: '',
    data: subscription
  });
}

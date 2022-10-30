import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/feedback
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // TODO: Logging
  console.log('POST /api/feedback', req.body);

  const feedback = {
    id: Date.now(),
    email: req.body.email,
    text: req.body.feedback,
  };

  // TODO: Perform some async operation like storing in server

  return res.status(201).json({
    message: 'New feedback created',
    data: feedback,
  });
}

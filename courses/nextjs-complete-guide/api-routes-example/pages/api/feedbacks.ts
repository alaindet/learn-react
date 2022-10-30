import type { NextApiRequest, NextApiResponse } from 'next';

import { Feedback, fetchFeedbacks, saveFeedback } from '../../features/feedbacks';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      console.log('GET /api/feedbacks', req.body);
      return handleFetchFeedbacks(req, res);
    case 'POST':
      console.log('POST /api/feedbacks', req.body);
      return handleSaveFeedback(req, res);
    default:
      return res.status(405).send('Method Not Allowed');
  }
}

// GET /api/feedback
async function handleFetchFeedbacks(req: NextApiRequest, res: NextApiResponse) {
  const feedbacks = await fetchFeedbacks();
  return res.status(200).send({
    message: 'All feedbacks',
    data: feedbacks,
  });
}

// POST /api/feedbacks
async function handleSaveFeedback(req: NextApiRequest, res: NextApiResponse) {

  if (!req.body.email || !req.body.feedback) {
    return res.status(400).send({
      message: 'Bad Request',
      data: null,
    });
  }

  const feedback: Feedback = {
    id: Date.now(),
    email: req.body.email,
    text: req.body.feedback,
  };

  await saveFeedback(feedback);

  return res.status(201).json({
    message: 'New feedback created',
    data: feedback,
  });
}

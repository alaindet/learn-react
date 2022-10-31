import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchFeedback } from '../../../features/feedbacks';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      console.log(`GET /api/feedback/${req.query.feedbackid}`, req.body);
      return handleFetchFeedback(req, res);
    default:
      return res.status(405).send({
        message: 'Method Not Allowed',
        data: null,
      });
  }
}

// GET /api/feedbacks/:feedbackid
async function handleFetchFeedback(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.feedbackid;

  if (!id || Array.isArray(id)) {
    return res.status(400).send({
      message: 'Feedback ID not provided',
      data: null,
    });
  }

  const feedback = await fetchFeedback(id);

  if (!feedback) {
    return res.status(404).send({
      message: `No feedback found with ID ${id}`,
      data: null,
    });
  }

  return res.status(200).send({
    message: `Feedback with ID ${id}`,
    data: feedback,
  });
}

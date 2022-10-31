import type { NextApiRequest, NextApiResponse } from 'next';

import { createComment, CreateCommentRequest } from '@/features/comments';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGetCommentsByEvent(req, res);
    case 'POST':
      return handleCreateNewCommentOnEvent(req, res);
    default:
      return res.status(405).send({ message: 'Method Not Allowed', data: null });
  }
}

async function handleGetCommentsByEvent(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Validation
}

async function handleCreateNewCommentOnEvent(req: NextApiRequest, res: NextApiResponse) {

  // TODO: Validation

  const request: CreateCommentRequest = {
    eventId: req.query.eventId as string,
    email: req.query.email as string,
    name: req.query.name as string,
    text: req.query.text as string,
  };

  const comment = await createComment(request);

  return res.status(201).send({
    message: `Comment created on event ${comment.eventId}`,
    data: comment,
  });
}

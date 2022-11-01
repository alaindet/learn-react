import type { NextApiRequest, NextApiResponse } from 'next';

import { CreateCommentRequest } from '@/features/comments';
import { createComment, getCommentsByEventId } from '@/features/comments/server';
import { getEventById } from '@/features/events/server';
import { createResponse, badRequest, methodNotAllowed, notFound } from '@/common/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGetCommentsByEvent(req, res);
    case 'POST':
      return handleCreateNewCommentOnEvent(req, res);
    default:
      return methodNotAllowed(res);
  }
}

async function handleGetCommentsByEvent(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.eventid) {
    return badRequest(res, 'No event ID provided');
  }
  const eventId = req.query.eventid as string;
  const comments = await getCommentsByEventId(eventId);
  const message = `Comments created on event ${eventId}`;
  return res.status(200).send(createResponse(message, comments));
}

async function handleCreateNewCommentOnEvent(req: NextApiRequest, res: NextApiResponse) {

  const eventId = req.query?.eventid as string;
  const email = req.body?.email as string;
  const name = req.body?.name as string;
  const text = req.body?.text as string;
  const validate = (x: any) => !!x && !Array.isArray(x) && x.trim() !== '';

  const event = await getEventById(eventId);
  if (!event) {
    return notFound(res, `Event with ID "${eventId}" not found`);
  }

  if (!validate(eventId) || !validate(email) || !validate(name) || !validate(text)) {
    return badRequest(res, 'Invalid input. Cannot create comment');
  }

  const request: CreateCommentRequest = { eventId, email, name, text };
  const comment = await createComment(request);
  const message = `Comment created on event "${event.title}"`;
  return res.status(201).send(createResponse(message, comment));
}

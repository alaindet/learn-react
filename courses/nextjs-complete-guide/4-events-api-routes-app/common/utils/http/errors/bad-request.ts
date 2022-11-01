import { NextApiResponse } from 'next';

import { createErrorResponse } from '../create-response';

export function badRequest<T = any>(
  res: NextApiResponse,
  message = 'Bad Request',
  data?: T,
) {
  return res.status(400).send(createErrorResponse(message, data));
}

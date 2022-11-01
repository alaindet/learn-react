import { NextApiResponse } from 'next';

import { createErrorResponse } from '../create-response';

export function notFound<T = any>(
  res: NextApiResponse,
  message = 'Not Found',
  data?: T,
) {
  return res.status(404).send(createErrorResponse(message, data));
}

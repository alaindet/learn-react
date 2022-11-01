import { NextApiResponse } from 'next';

import { createErrorResponse } from '../create-response';

export function methodNotAllowed<T = any>(
  res: NextApiResponse,
  message = 'Method Not Allowed',
  data?: T,
) {
  return res.status(405).send(createErrorResponse(message, data));
}

import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * This catches all unmatched API routes
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('CATCH ALL API ROUTES', req.query);
  const route = (req.query?.other as string[])?.join('/') ?? '';
  return res.status(500).send({
    message: `No API route found for route '${route}'`,
    data: null,
  });
}

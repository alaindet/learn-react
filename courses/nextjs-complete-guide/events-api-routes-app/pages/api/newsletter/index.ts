import type { NextApiRequest, NextApiResponse } from 'next';

import { LiveEvent } from '@/features/events';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGetAllEvents(req, res);
    default:
      return res.status(405).send({ message: 'Method Not Allowed', data: null });
  }
}

async function handleGetAllEvents(req: NextApiRequest, res: NextApiResponse) {

}

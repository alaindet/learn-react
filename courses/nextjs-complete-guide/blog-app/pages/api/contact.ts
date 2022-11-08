import type { NextApiRequest, NextApiResponse } from 'next';

import { validateEmail } from '@/common/validators';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handleSendContactForm(req, res);
    default:
      return res.status(405).send({
        error: true,
        message: 'Method Not Allowed',
        data: null,
      });
  }
}

async function handleSendContactForm(req: NextApiRequest, res: NextApiResponse) {

  const email = req.body?.email as string;
  const name = req.body?.name as string;
  const message = req.body?.message as string;
  const validate = (x: any) => !!x && !Array.isArray(x) && x.trim() !== '';

  if (!validate(email) || !validateEmail(email) || !validate(name) || !validate(message)) {
    return res.status(400).send({
      error: true,
      message: 'Invalid input. Cannot send message',
      data: null,
    });
  }

  return res.status(200).send({
    error: false,
    message: 'Message sent successfully',
    datal: null,
  });
}

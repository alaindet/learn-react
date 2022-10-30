import path from 'path';
import fs from 'fs/promises';

import { Feedback } from './types';

const FEEDBACKS_PATH = path.join(process.cwd(), 'data', 'feedbacks.json');

export async function saveFeedback(feedback: Feedback): Promise<void> {
  const feedbacks = await fetchFeedbacks();
  feedbacks.push(feedback);
  await fs.writeFile(FEEDBACKS_PATH, JSON.stringify(feedbacks));
}

export async function fetchFeedbacks(): Promise<Feedback[]> {
  const feedbacksRaw = await fs.readFile(FEEDBACKS_PATH, { encoding: 'utf-8' });
  return JSON.parse(feedbacksRaw) as Feedback[];
}

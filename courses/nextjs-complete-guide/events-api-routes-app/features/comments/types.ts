import { LiveEvent } from '@/features/events';

export interface Comment {
  id: string;
  eventId: LiveEvent['id'];
  email: string;
  name: string;
  text: string;
}

export interface CreateCommentRequest {
  eventId: LiveEvent['id'];
  email: string;
  name: string;
  text: string;
}

import { getRandomHash } from '@/common/utils';
import { commentsRepository } from './repository';
import { Comment, CreateCommentRequest } from '../types';

export async function getCommentsByEventId(eventId: Comment['eventId']): Promise<Comment[]> {
  return await commentsRepository.getFilteredItems(item => item.eventId === eventId);
}

export async function getCommentById(id: Comment['id']): Promise<Comment | null> {
  return await commentsRepository.getItemById(id);
}

export async function createComment(request: CreateCommentRequest): Promise<Comment> {
  const id = getRandomHash(8);
  const comment: Comment = { id, ...request };
  await commentsRepository.addItem(comment);
  return comment;
}

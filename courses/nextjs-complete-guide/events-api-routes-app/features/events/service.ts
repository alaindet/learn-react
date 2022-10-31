import { getRandomHash } from '@/common/utils';
import { eventsRepository } from './repository';
import { CreateLiveEventRequest, LiveEvent, LiveEventFilters } from './types';

export async function getAllEvents(): Promise<LiveEvent[]> {
  return await eventsRepository.getItems();
}

export async function getFeaturedEvents(): Promise<LiveEvent[]> {
  return await eventsRepository.getFilteredItems(item => item.isFeatured);
}

export async function getFilteredEvents(filters: LiveEventFilters): Promise<LiveEvent[]> {
  const { year, month } = filters;
  return await eventsRepository.getFilteredItems(item => {
    const d = new Date(item.date);
    return d.getFullYear() === year && d.getMonth() + 1 === month;
  });
}

export async function getEventById(id: LiveEvent['id']): Promise<LiveEvent | null> {
  return await eventsRepository.getItemById(id);
}

export async function createEvent(request: CreateLiveEventRequest): Promise<LiveEvent> {
  const id = getRandomHash(8);
  const event: LiveEvent = { id, ...request };
  await eventsRepository.addItem(event);
  return event;
}

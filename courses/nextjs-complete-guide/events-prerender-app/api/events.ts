import { LiveEvent } from '../types';

const API_URL = 'http://localhost:4242';

export async function getFeaturedEvents(): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events?featured`);
  return await res.json() as LiveEvent[];
}

export async function getAllEvents(): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events`);
  return await res.json() as LiveEvent[];
}

export async function getFilteredEvents(
  year: number,
  month: number,
): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events?year=${year}&month=${month}`);
  return await res.json() as LiveEvent[];
}

export async function getEventById(id: number): Promise<LiveEvent> {
  const res = await fetch(`${API_URL}/events/${id}`);
  return await res.json() as LiveEvent;
}

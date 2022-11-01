import { LiveEvent } from '../types';

const API_URL = 'http://localhost:4242';

export async function getFeaturedEvents(): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events?featured`);
  return (await res.json()).data as LiveEvent[];
}

export async function getAllEvents(): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events`);
  return (await res.json()).data as LiveEvent[];
}

export async function getFilteredEvents(
  year: number,
  month: number,
): Promise<LiveEvent[]> {
  const res = await fetch(`${API_URL}/events?year=${year}&month=${month}`);
  return (await res.json()).data as LiveEvent[];
}

export async function getEventById(id: string): Promise<LiveEvent | null> {
  const rawRes = await fetch(`${API_URL}/events/${id}`);
  if (rawRes.status !== 200) return null;
  const res = await rawRes.json();
  return res.data as LiveEvent;
}

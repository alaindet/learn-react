import { EventFilters, LiveEvent } from './types';

const MOCK_EVENTS: LiveEvent[] = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/e1-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/e2-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/e3-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents(): LiveEvent[] {
  return MOCK_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents(): LiveEvent[] {
  return MOCK_EVENTS;
}

export function getFilteredEvents(filters: EventFilters): LiveEvent[] {

  const { year, month } = filters;

  let filteredEvents = MOCK_EVENTS.filter((event) => {
    const d = new Date(event.date);
    return d.getFullYear() === year && d.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id: string): LiveEvent | undefined {
  return MOCK_EVENTS.find(event => event.id === id);
}

export const events = [
  {
    id: 1,
    title: 'Meeting with Eliy',
    start: new Date('2025-04-07T09:00:00'),
    end: new Date('2025-04-07T10:00:00'),
    // You might have other properties like 'resourceId', 'color', etc.
  },
  {
    id: 2,
    title: 'Family Time',
    start: new Date('2025-04-06T10:00:00'),
    end: new Date('2025-04-06T13:30:00'),
  },
  {
    id: 3,
    title: 'Team Catch-up',
    start: new Date('2025-04-07T08:45:00'),
    end: new Date('2025-04-07T11:00:00'),
  },
  {
    id: 4,
    title: 'Team Intro',
    start: new Date('2025-04-08T09:00:00'),
    end: new Date('2025-04-08T09:30:00'),
  },
  {
    id: 5,
    title: 'Product Meeting',
    start: new Date('2025-04-09T08:00:00'),
    end: new Date('2025-04-09T11:30:00'),
  },
  {
    id: 6,
    title: '1:1 w/ Tommy',
    start: new Date('2025-04-09T09:45:00'),
    end: new Date('2025-04-09T10:45:00'),
  },
  {
    id: 7,
    title: 'Kick-off call',
    start: new Date('2025-04-09T11:00:00'),
    end: new Date('2025-04-09T11:40:00'),
  },
  {
    id: 8,
    title: 'Weekly Review',
    start: new Date('2025-04-11T08:45:00'),
    end: new Date('2025-04-11T09:45:00'),
  },
  {
    id: 9,
    title: 'Family Time',
    start: new Date('2025-04-12T07:00:00'),
    end: new Date('2025-04-12T07:40:00'),
  },
  {
    id: 10,
    title: 'Task Presentation',
    start: new Date('2025-04-08T10:45:00'),
    end: new Date('2025-04-08T13:30:00'),
  },
  {
    id: 11,
    title: 'Team Meeting',
    start: new Date('2025-04-09T13:30:00'),
    end: new Date('2025-04-09T15:00:00'),
  },
  {
    id: 12,
    title: 'Checkin w/ Pedra',
    start: new Date('2025-04-07T15:00:00'),
    end: new Date('2025-04-07T16:00:00'),
  },
  {
    id: 13,
    title: 'Meeting w/ Mike',
    start: new Date('2025-04-11T14:30:00'),
    end: new Date('2025-04-11T15:30:00'),
  },
  // ... add more events based on your screenshots if needed
];

// If your scheduler supports resources (like different calendars for different teams)
export const resources = [
  { id: 'myEvents', name: 'My Events', color: '#66bb6a' }, // Green-ish
  { id: 'marketingTeam', name: 'Marketing Team', color: '#ffeb3b' }, // Yellow-ish
  { id: 'interviews', name: 'Interviews', color: '#ff9800' }, // Orange-ish
  { id: 'eventsPlanning', name: 'Events Planning', color: '#f44336' }, // Red-ish
  { id: 'holidays', name: 'Holidays', color: '#2196f3' }, // Blue-ish
];
type Event = {
  id: string;
  title: string;
  staffId: string;
  startTime: string; // e.g. "09:30"
  endTime: string;   // e.g. "11:00"
  overlapOrder: number; // order of the stacked event
  overlapCount: number; // total count of stacked event
};
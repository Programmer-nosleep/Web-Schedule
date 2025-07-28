import React from 'react';
import { events, resources } from '../utils/data';
import { Scheduler as ReactScheduler } from '@aldabil/react-scheduler';
// import '@aldabil/react-scheduler/dist/index.css';

// Interface untuk Event Anda, sesuai dengan properti yang dibutuhkan oleh @aldabil/react-scheduler
interface Event {
  event_id: number | string; // @aldabil/react-scheduler expects 'event_id'
  title: string;
  start: Date;
  end: Date;
  resourceId?: string; // Optional: untuk mengaitkan event dengan resource
  // Tambahkan properti lain yang mungkin Anda miliki di event Anda
}

// Interface untuk Resource Anda, sesuai dengan properti yang dibutuhkan oleh @aldabil/react-scheduler
interface Resource {
  assigner: string; // Ini akan menjadi 'id' yang digunakan di event.resourceId
  text: string;
  color: string;
}

const SchedulerComponent: React.FC = () => {
  // Map data events Anda agar sesuai dengan format yang dibutuhkan oleh @aldabil/react-scheduler
  // Pastikan 'id' di data.ts diubah menjadi 'event_id'
  const mappedEvents: Event[] = events.map(event => ({
    event_id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    // Jika Anda ingin mengaitkan event dengan resource, tambahkan resourceId di sini.
    // Contoh: resourceId: 'myEvents', (jika semua event default adalah 'My Events')
    // Anda perlu logika untuk menentukan resourceId dari event Anda jika ada.
  }));

  // Map resources Anda agar sesuai dengan format yang dibutuhkan oleh @aldabil/react-scheduler
  // properti 'id' dari resource Anda dipetakan ke 'assigner'
  const mappedResources: Resource[] = resources.map(res => ({
    assigner: res.id,
    text: res.name,
    color: res.color,
  }));

  // State untuk event di scheduler, penting untuk interaksi (add, update, delete)
  const [schedulerEvents, setSchedulerEvents] = React.useState<Event[]>(mappedEvents);

  // Fungsi untuk menangani operasi pembuatan/pengeditan event
  const handleConfirm = async (event: Event, action: 'create' | 'edit'): Promise<Event> => {
    if (action === "create") {
      console.log('Event added:', event);
      // Generate ID unik untuk event baru jika Anda tidak memiliki backend
      const newEvent = { ...event, event_id: Math.random() };
      setSchedulerEvents(prevEvents => [...prevEvents, newEvent]);
      return newEvent;
    } else if (action === "edit") {
      console.log('Event updated:', event);
      setSchedulerEvents(prevEvents =>
        prevEvents.map(e => (e.event_id === event.event_id ? event : e))
      );
      return event;
    }
    return event; // Fallback
  };

  // Fungsi untuk menangani operasi penghapusan event
  const handleDelete = async (event_id: string | number): Promise<string | number> => {
    console.log('Event deleted:', event_id);
    setSchedulerEvents(prevEvents => prevEvents.filter(e => e.event_id !== event_id));
    return event_id;
  };

  return (
    <div className="scheduler-page" style={{ margin: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', height: '80vh' }}>
      <h2>My Calendar Scheduler</h2>
      <p>
        Ini adalah tampilan scheduler menggunakan `@aldabil/react-scheduler` dengan data dari `../util/data.ts`.
      </p>

      <ReactScheduler
        view="week" // Default view
        events={schedulerEvents}
        resources={mappedResources}
        resourceFields={{
          idField: "assigner", // Field di event yang merujuk ke resource (misal: event.resourceId = 'myEvents')
          textField: "text",
          colorField: "color",
        }}

        // Penanganan CRUD event
        onConfirm={handleConfirm}
        onDelete={handleDelete}

        // --- KONFIGURASI VIEW DITEMPATKAN DI SINI ---
        week={{
          weekDays: [0, 1, 2, 3, 4, 5, 6], // Minggu, Senin, ... Sabtu
          weekStartOn: 0, // Minggu sebagai hari pertama (0)
          startHour: 8, // Jam mulai tampilan hari/minggu (8 AM)
          endHour: 18,  // Jam akhir tampilan hari/minggu (6 PM)
          step: 30,     // Interval waktu dalam menit (misal: 30 menit)
          // hourFormat: "24" // Format jam "24" atau "12"
        }}
        day={{
          startHour: 8,
          endHour: 18,
          step: 30,
          // hourFormat: "24"
        }}
        // month={{
        //   weekDays: [0, 1, 2, 3, 4, 5, 6],
        //   weekStartOn: 0
        // }}
        // ---------------------------------------------

        // Aktifkan atau nonaktifkan mode baca saja
        // readOnly={false}
      />

      <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '0.9em' }}>
        <h3>Loaded Events (from data.ts):</h3>
        <ul>
          {schedulerEvents.map(event => (
            <li key={event.event_id}>
              {event.title} ({event.start.toLocaleDateString()} {event.start.toLocaleTimeString()} - {event.end.toLocaleTimeString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SchedulerComponent;
import React, { useState, useRef } from "react"
import type { ChangeEvent } from "react"
import { Input } from "./ui/input"
import Navbar from "./Navbar"

const Scheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const dateInputRef = useRef<HTMLInputElement>(null);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    });
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const raw = e.target.value;
    console.log("Selected date value:", raw);
    const newDate = new Date(raw);

    if (!isNaN(newDate.getTime())) {
      setSelectedDate(newDate);
    } else {
      console.warn("Invalid date:", raw);
    }
  };

  const openDatePicker = (): void => {
    dateInputRef.current?.click();
  };

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar className='top-0 left-0 w-full z-50 px-8 py-3 border-b border-gray-200 flex justify-between items-center'>
        <div>          
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-10"
          />
        </div>
      </Navbar>
      <div className='flex justify-between items-center px-8 py-3 border-b border-gray-200'>
        <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
          <button
            className="cursor-pointer px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100"
            onClick={() => setSelectedDate(new Date())}
          >
            Hari Ini
          </button>
     
          <button className="cursor-pointer px-2 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
     
          <button
            className="cursor-pointer flex items-center px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 space-x-2"
            onClick={openDatePicker}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{selectedDate ? formatDate(selectedDate) : 'Pilih tanggal'}</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
     
          <input
            ref={dateInputRef}
            type="date"
            className="hidden block"
            onChange={handleDateChange}
            value={selectedDate.toISOString().split('T')[0]}
          />
     
          <button className="cursor-pointer px-2 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
     
          <button className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h8m-8 6h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
     
          {/* Share */}
          <button className="p-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M15 8a3 3 0 00-3-3H6a3 3 0 000 6h6a3 3 0 003-3zM9 16a3 3 0 00-3-3H3a3 3 0 000 6h3a3 3 0 003-3zm12-6h-6a3 3 0 000 6h6a3 3 0 000-6z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className=''>
          <Input
            id='username'
            type='text'
            placeholder='Search'
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='flex justify-around items-center py-6 border-b border-gray-200'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div className=''>
            <div className='rounded-full border-2 border-gray-200/50'></div>
            {/* <span>{ profileName }</span> */}
          </div>
        ))}
      </div>

      {/* Posisi paling bawah? */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-3">
          {/* Icon Calendar */}
          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Jadwal</span>
          </button>

          {/* Icon Chart */}
          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M11 3h2v18h-2zM4 12h2v9H4zM18 6h2v15h-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Statistik</span>
          </button>

          {/* Icon Add */}
          <button className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center -mt-6 shadow-lg hover:bg-blue-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Icon Book */}
          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 4h14v16H5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Pesanan</span>
          </button>

          {/* Icon Settings */}
          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Pengaturan</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Scheduler
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CollapsibleCalendar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date();

  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentYear, currentMonth + offset, 1);
    setCurrentDate(newDate);
  };

  const generateCalendar = () => {
    const days: (Date | null)[] = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(currentYear, currentMonth, i));
    }

    return days;
  };

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isPastDate = (date: Date) => {
    const ref = new Date();
    ref.setHours(0, 0, 0, 0);
    return date < ref;
  };

  return (
    <div className="w-[350px] mx-auto text-sm">
      {/* Dropdown header */}
      <div
        className="border border-[#E7E7E8] p-3 rounded-lg flex justify-between items-center cursor-pointer text-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDate
          ? selectedDate.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })
          : 'Select Date'}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Calendar body */}
      {isOpen && (
        <div className="mt-3 p-3 border border-[#E7E7E8] rounded-xl shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <ChevronLeft
              className="w-4 h-4 cursor-pointer"
              onClick={() => changeMonth(-1)}
            />
            <span className="font-semibold">
              {currentDate.toLocaleString('default', {
                month: 'long',
              })}{' '}
              {currentYear}
            </span>
            <ChevronRight
              className="w-4 h-4 cursor-pointer"
              onClick={() => changeMonth(1)}
            />
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-700 mb-1">
            {daysOfWeek.map((day) => (
              <div key={day} className={day === 'Sun' || day === 'Sat' ? 'text-blue-600' : ''}>
                {day}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {generateCalendar().map((date, idx) => {
              if (!date) return <div key={idx} className="w-8 h-8" />;

              const disabled = isPastDate(date);
              const selected = selectedDate && isSameDate(date, selectedDate);

              return (
                <button
                  key={idx}
                  onClick={() => !disabled && setSelectedDate(date)}
                  className={`w-8 h-8 rounded-full transition ${
                    selected
                      ? 'bg-blue-600 text-white'
                      : disabled
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'hover:bg-gray-100'
                  }`}
                  disabled={disabled}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCalendar;

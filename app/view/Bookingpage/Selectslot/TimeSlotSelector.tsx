'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const TimeSlotSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  const timeSlots = [
    '9:00 AM – 10:00 AM',
    '10:00 AM – 11:00 AM',
    '11:00 AM – 12:00 PM',
    '12:00 PM – 1:00 PM',
    '1:00 PM – 2:00 PM',
    '2:00 PM – 3:00 PM',
  ];

  return (
    <div className="w-[350px] mx-auto text-sm space-y-4 mt-10">
      {/* Dropdown trigger */}
      <div
        className="border border-[#E7E7E8] p-3 rounded-lg flex justify-between items-center cursor-pointer text-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSlot || 'Select Time'}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Slot list */}
      {isOpen && (
        <div className="border border-[#E7E7E8] rounded-xl overflow-y-auto max-h-40 p-2 space-y-2">
          {timeSlots.map((slot, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedSlot(slot);
                setIsOpen(false);
              }}
              className={`w-full text-left p-2 rounded ${
                selectedSlot === slot
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-black'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      )}

      {/* Book Now and Call */}
      <div className="flex items-center gap-2">
        <button
          className="flex-1 bg-black text-white py-3 rounded text-center text-sm font-semibold hover:bg-gray-900"
          onClick={() => {
            if (!selectedSlot) return alert('Please select a time slot');
            alert(`Booking confirmed for ${selectedSlot}`);
          }}
        >
          Book Now
        </button>

        <button
          className="p-3 border rounded hover:bg-gray-50"
          onClick={() => {
            window.open('tel:+910000000000', '_blank');
          }}
        >
          <Phone className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TimeSlotSelector;

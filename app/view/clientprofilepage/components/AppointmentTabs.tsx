'use client';

import React, { useState } from 'react';

interface AppointmentTabsProps {
  PendingComponent: React.ReactNode;
  CompletedComponent: React.ReactNode;
}

const AppointmentTabs: React.FC<AppointmentTabsProps> = ({
  PendingComponent,
  CompletedComponent,
}) => {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Completed'>('Pending');

  return (
    <div className=''>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-300 mb-4 text-lg font-semibold mt-10">
        <button
          className={`pb-2 font-clash ${
            activeTab === 'Pending'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('Pending')}
        >
          Pending
        </button>

        <button
          className={`pb-2 font-clash ${
            activeTab === 'Completed'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('Completed')}
        >
          Completed
        </button>
      </div>

      {/* Render Component */}
      {activeTab === 'Pending' ? PendingComponent : CompletedComponent}
    </div>
  );
};

export default AppointmentTabs;

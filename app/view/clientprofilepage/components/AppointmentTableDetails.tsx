'use client';

import React from 'react';
import Image from 'next/image';

interface Details {
  image: string;
  username: string;
  servicetype: string;
  date: string;
  time: string;
  paymenttype: 'Online' | 'Cash'; // You can add more if needed
  status: 'Scheduled' | 'Completed' | 'Cancelled'; // Add more types if needed
}

// Payment badge component
const PaymentTypeBadge: React.FC<{ type: Details['paymenttype'] }> = ({ type }) => {
  const bgColor = type === 'Online' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor}`}>
      {type}
    </span>
  );
};

// Status button component
const StatusButton: React.FC<{ status: Details['status'] }> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <button className={`px-3 py-1 rounded-full text-xs font-semibold ${getColor()}`}>
      {status}
    </button>
  );
};

const AppointmentTableDetails: React.FC<Details> = ({
  image,
  username,
  servicetype,
  date,
  time,
  paymenttype,
  status,
}) => {
  return (
    <div className="w-full border border-[#E7E7E8] px-4 py-3 flex justify-around items-center bg-[#FAFAFA] text-sm font-medium">
      <div className="flex items-center gap-2 w-[150px]">
        <Image src={image} width={32} height={32} alt="profile" className="rounded-full" />
        <span>{username}</span>
      </div>

      <span className="w-[100px] text-center">{servicetype}</span>

      <a href="#" className="text-blue-600 underline w-[100px] text-center">
        Get Direction
      </a>

      <span className="w-[90px] text-center">{date}</span>
      <span className="w-[70px] text-center">{time}</span>

      <div className="w-[90px] text-center">
        <PaymentTypeBadge type={paymenttype} />
      </div>

      <div className="w-[110px] text-center">
        <StatusButton status={status} />
      </div>

      <Image src="/core/icons/dots.png" width={20} height={20} alt="menu" />
    </div>
  );
};

export default AppointmentTableDetails;

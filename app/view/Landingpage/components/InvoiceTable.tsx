'use client'

import React from 'react'

const invoices = [
  {
    name: 'AS_PUBLISHER',
    company: '314 Arts OHG',
    invoiceDate: '31. Dec. 2022',
    payoutDate: '15. Jan. 2023',
    amount: '€53,18',
    status: 'Pending',
  },
  {
    name: 'AS_PUBLISHER',
    company: '314 Arts OHG',
    invoiceDate: '31. Dec. 2022',
    payoutDate: '15. Jan. 2023',
    amount: '€33,13',
    status: 'Success',
  },
  {
    name: 'AS_PUBLISHER',
    company: '314 Arts OHG',
    invoiceDate: '31. Dec. 2022',
    payoutDate: '15. Jan. 2023',
    amount: '€16,09',
    status: 'Success',
  },
  {
    name: 'AS_PUBLISHER',
    company: '314 Arts OHG',
    invoiceDate: '31. Dec. 2022',
    payoutDate: '15. Jan. 2023',
    amount: '€38,28',
    status: 'Success',
  },
]

const InvoiceTable = () => {
  return (
    <div className="max-w-[850px] w-full mx-auto mt-6 font-poppins text-sm scale-[0.9] origin-top-lef bg-white rounded-2xl">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-gray-700 text-sm">
            <th className="px-4">Name</th>
            <th className="px-4">Invoice Date</th>
            <th className="px-4">Payout Date</th>
            <th className="px-4">Amount</th>
            <th className="px-4">Status</th>
            <th className="px-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice, index) => (
            <tr
              key={index}
              className="bg-white rounded-xl shadow-sm border border-[#E7E7E8]"
            >
              <td className="py-3 px-4">
                <div className="flex flex-col">
                  <span className="font-semibold">{invoice.name}</span>
                  <span className="text-xs text-gray-500">{invoice.company}</span>
                </div>
              </td>
              <td className="py-3 px-4">{invoice.invoiceDate}</td>
              <td className="py-3 px-4">{invoice.payoutDate}</td>
              <td className="py-3 px-4">{invoice.amount}</td>
              <td className="py-3 px-4">
                {invoice.status === 'Success' ? (
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    ✓ Success
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    ⏳ Pending
                  </span>
                )}
              </td>
              <td className="py-3 px-4 z-50">
                <button className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-1 rounded-md">
                  👁️ View Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceTable

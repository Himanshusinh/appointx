'use client'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {/* Previous Button */}
      <button
        className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-500 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-full text-sm font-medium transition ${
            page === currentPage
              ? 'bg-black text-white'
              : 'text-black hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-500 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  )
}

export default Pagination

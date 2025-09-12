'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 4) {
        pages.push('...');
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <nav className="flex items-center justify-center space-x-2">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
        >
          Anterior
        </Link>
      )}
      
      {getPageNumbers().map((page, index) => (
        <span key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-sm font-medium text-gray-400 dark:text-gray-500">
              ...
            </span>
          ) : (
            <Link
              href={`/?page=${page}`}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-baixada-blue text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {page}
            </Link>
          )}
        </span>
      ))}
      
      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
        >
          Próxima
        </Link>
      )}
    </nav>
  );
}
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-baixada-blue to-baixada-green">
              <span className="text-white font-bold text-lg">BA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Baixada
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">em Alta</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-baixada-blue dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/direitos-trabalhistas"
              className="text-gray-700 hover:text-baixada-blue dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Direitos CLT
            </Link>
            <Link
              href="/mei"
              className="text-gray-700 hover:text-baixada-blue dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Guia MEI
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-baixada-blue dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Sobre
            </Link>
            <ThemeToggle />
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <div className="relative group">
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Início
                </Link>
                <Link
                  href="/direitos-trabalhistas"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Direitos CLT
                </Link>
                <Link
                  href="/mei"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Guia MEI
                </Link>
                <Link
                  href="/sobre"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sobre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
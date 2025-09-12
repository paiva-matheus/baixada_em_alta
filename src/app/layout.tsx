import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Baixada Santista News',
  description: 'Notícias da Região da Baixada Santista em São Paulo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
          <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2025 Baixada Santista News. Todos os direitos reservados.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
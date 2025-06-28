// app/layout.js or app/layout.tsx
import './globals.css'; // if using global styles
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Tuition - Learn Smarter',
  description: 'AI-powered education for classes 6 to 10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

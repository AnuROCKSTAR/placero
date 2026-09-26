import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Placero | Student Placement Prep',
  description: 'Placement OS for engineers and students to prepare, practice, prove, and improve.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

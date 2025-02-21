import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import { error } from 'console';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {

  return (
    
    <html lang="en">
          <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}

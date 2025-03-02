import { Metadata } from 'next';
import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
// import { error } from 'console';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme 看板',
    default: 'Acme 看板',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
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

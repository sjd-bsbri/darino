import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'دارینو | دانشنامه دارویی و تداخل‌سنج هوشمند',
  description:
    'مرجع جامع ۱۲۰۰ دارو به زبان ساده، مجهز به تداخل‌سنج هوشمند دارویی، یادداشت شخصی و چالش‌های آموزشی برای اندروید و آیفون.',
  icons: {
    icon: '/darino/icon.png',
    apple: '/darino/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
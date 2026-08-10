import './globals.css';

export const metadata = {
  title: 'Djeson Pro — Apple of Fortune',
  description: 'Assistant Apple of Fortune — Djeson Pro',
  icons: {
    icon: '/apple.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

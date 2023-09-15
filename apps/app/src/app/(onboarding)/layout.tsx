import 'tailwind-config/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

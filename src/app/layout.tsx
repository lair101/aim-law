// Root layout - minimal wrapper for locale-based routing
// The actual layout with Header/Footer is in [locale]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import "./globals.css";

export const metadata = {
  title: "SCPL Agent Portal",
  description: "SCPL स्वेच्छा केंद्र agent portal: IRCTC, recharges and bill payments",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

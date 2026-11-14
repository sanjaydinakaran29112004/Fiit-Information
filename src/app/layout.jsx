import './globals.css';

export const metadata = {
  title: 'FIIT FORMACION | IT Training, Skill Development & Placement Institute | Tamil Nadu',
  description: 'FIIT Formacion PVT. LTD. - Empowering Future IT Professionals. Practical rigor, corporate calibration, and verified career outcomes across Tamil Nadu.',
  keywords: 'FIIT Formacion, IT training Chennai, Tamil Nadu IT institute, Full Stack, Data Analytics, Python, internships',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1f4b'><rect width='24' height='24' rx='5' fill='%231a1f4b'/><text x='50%25' y='68%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='16' fill='white'>F</text></svg>",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1f4b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden max-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#1a1f4b] antialiased selection:bg-[#1a1f4b] selection:text-white overflow-x-hidden max-w-full w-full relative">
        {children}
      </body>
    </html>
  );
}

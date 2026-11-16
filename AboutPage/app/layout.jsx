import './globals.css';

export const metadata = {
  title: 'About Us | FIIT Formacion PVT. LTD. - Enterprise Software Engineering Incubation',
  description: 'FIIT Formacion Pvt. Ltd. was established to solve the critical gap between university engineering curriculum and real-world corporate technology expectations.',
  icons: {
    icon: '/images/avatar.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#f5f6fc] text-slate-900 antialiased selection:bg-[#141d4a] selection:text-white">
        {children}
      </body>
    </html>
  );
}

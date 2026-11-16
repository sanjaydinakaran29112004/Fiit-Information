import './globals.css';

export const metadata = {
  title: '9 Tech Hub Branches Across Tamil Nadu | FIIT Formacion PVT. LTD.',
  description: 'Visit FIIT Formacion modern tech campuses located across Chennai, Vellore, Thiruvannamalai, Tambaram, Avadi, Chengalpattu, Redhills, Ambattur, and Iyyappanthangal HQ.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#f8f9fd] text-[#1a1f4b] antialiased">{children}</body>
    </html>
  );
}

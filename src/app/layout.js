import { Recursive } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from 'react-toastify';

const recursive = Recursive({ subsets: ['latin'], display: 'swap', variable: "--font-recursive" });

export const metadata = {
  title: "Pind Pind Library – Bringing Books to Villages",
  description: "Pind Pind Library is a  community-driven initiative to establish libraries in religious places across villages. Join us in making knowledge accessible to everyone.",
  keywords: "Pind pind library,pind pind library org, pind pind library community library, book donation, rural education, knowledge for all, pind Library, Pind Pind Library, Library, Pind Pind, The Library, Village Library, Pind Education, Education, Pind Pind Library Mission, Pind Pind Library Foundation, Pind Pind Library Vision",
  openGraph: {
    title: "Pind Pind Library – Bringing Books to Villages",
    description: "Join our mission to set up libraries in villages and promote education through books.",
    url: "https://pindpindlibrary.org/",
    site_name: "Pind Pind Library",
    images: [
      {
        url: "https://pindpindlibrary.org/library-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pind Pind Library",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/images/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <ToastContainer position="top-right" theme="light" autoClose={3000}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

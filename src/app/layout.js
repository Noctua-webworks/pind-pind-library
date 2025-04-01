import { Recursive } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const recursive = Recursive({ subsets: ['latin'], display: 'swap', variable: "--font-recursive" });

export const metadata = {
  title: "Pind Pind Library – Bringing Books to Villages",
  description: "Pind Pind Library is a community-driven initiative to establish libraries in religious places across villages. Join us in making knowledge accessible to everyone.",
  keywords: "village library, community library, book donation, rural education, knowledge for all",
  openGraph: {
    title: "Pind Pind Library – Bringing Books to Villages",
    description: "Join our mission to set up libraries in villages and promote education through books.",
    url: "https://pind-pind-library.vercel.app/",
    site_name: "Pind Pind Library",
    images: [
      {
        url: "https://pind-pind-library.vercel.app/library-image.jpg",
        width: 1200,
        height: 630,
        alt: "Village Library",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

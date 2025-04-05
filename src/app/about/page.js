// app/about/page.js (Server Component)
import AboutUs from '@/components/AboutUs';

// Export metadata directly for Server Component
export const metadata = {
  title: 'About - Pind Pind Library',
};

export default function AboutPage() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}

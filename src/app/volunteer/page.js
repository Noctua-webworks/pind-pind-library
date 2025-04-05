// app/about/page.js (Server Component)

import LocationSelector from "@/components/Volunteer";

// Export metadata directly for Server Component
export const metadata = {
  title: 'Volunteer - Pind Pind Library',
};

export default function Volunteer() {
  return (
    <div>
      <LocationSelector />
    </div>
  );
}

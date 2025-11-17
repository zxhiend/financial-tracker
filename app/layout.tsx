import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import React from 'react';
import Navbar from '../components/Navbar';

// this is the root layout for the entire app
// it wraps every page with html and body tags and includs the navbar (typo in includes)
export const metadata: Metadata = {
  title: 'Financial Tracker',
  description: 'A simple financial tracker with weather api example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* render the nav bar on every page */}
        <Navbar />
        <div className="container mt-4">{children}</div>
      </body>
    </html>
  );
}
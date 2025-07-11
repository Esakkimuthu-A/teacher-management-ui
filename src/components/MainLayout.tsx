'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main content area */}
      <div className="lg:ml-64 flex flex-col min-h-screen w-full bg-white">
        {/* Header */}
        <Header onToggleSidebar={() => setIsOpen(!isOpen)} />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>


  );
}

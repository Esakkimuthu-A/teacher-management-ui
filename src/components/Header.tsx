'use client';

import { Menu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type HeaderProps = {
  onToggleSidebar: () => void;
};

export default function Header({ onToggleSidebar }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 shadow-sm">

      {/* Mobile Hamburger Icon */}
      <button className="lg:hidden mr-2" onClick={onToggleSidebar}>
        <Menu className="h-6 w-6 text-gray-800" />
      </button>

      {/* Page Title */}
      <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
        Dashboard
      </h1>

      {/* Profile + Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-3 cursor-pointer mr-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        {open && (
          <div className="absolute right-0 mt-2 bg-gray-50 text-black rounded shadow-lg w-48 p-4 z-50">
            <p className="text-sm font-semibold text-gray-800">Guest User</p>
            <p className="text-xs text-gray-500 mt-1 font-light">View Profile</p>
          </div>
        )}
      </div>
    </header>
  );
}

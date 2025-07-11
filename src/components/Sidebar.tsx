'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users } from 'lucide-react';
import clsx from 'clsx';
import { useEffect } from 'react';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: <Home size={18} /> },
    { href: '/teachers', label: 'Teachers', icon: <Users size={18} /> },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/40 z-30 transition-opacity',
          isOpen ? 'block lg:hidden' : 'hidden'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-[#1e1e2f] z-50 text-white pt-24 lg:pt-8 px-6 flex flex-col transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-10">Teacher UI</h2>

        {/* Menu items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#2a2a3d]',
                pathname === item.href && 'bg-[#2a2a3d]'
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

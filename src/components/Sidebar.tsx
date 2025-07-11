'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, Users, X } from 'lucide-react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

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
      {/* Backdrop overlay */}
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
          'fixed top-0 left-0 h-full w-64 bg-[#1e1e2f] z-40 text-white p-6 flex flex-col justify-between transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Close button - only for mobile */}
        <div className="lg:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* Menu items */}
        <div>
          <h2 className="text-2xl font-bold mb-10">Teacher UI</h2>
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
        </div>
      </aside>
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Bell, User } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tracker', href: '/dashboard/tracker' },
  { name: 'EcoAction', href: '/dashboard/eco-action' },
  { name: 'Map', href: '/dashboard/map' },
  { name: 'Collaboration', href: '/dashboard/collaboration' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 h-20 z-50 bg-white border-b border-gray-100 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 group"
        >
          <img 
            src="/logo.png" 
            alt="PACUL Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-pacul-primary relative py-2',
                  isActive ? 'text-pacul-primary' : 'text-gray-500'
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pacul-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:flex px-6 h-10 text-sm font-semibold uppercase tracking-wide">
            DASHBOARD
          </Button>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-pacul-light/30 text-pacul-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-pacul-light/30 text-pacul-primary transition-colors border border-gray-200">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

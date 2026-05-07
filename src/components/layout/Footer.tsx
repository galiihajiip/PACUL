import Link from 'next/link';
import {
  Leaf,
  Globe,
  Share2,
  LucideIcon,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pacul-primary px-6 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-start">
        {/* Left Section */}
        <div className="max-w-sm">
          <Link
            href="/"
            className="mb-6 flex items-center gap-3"
          >
            <img 
              src="/logo.png" 
              alt="PACUL Logo" 
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
          </Link>

          <p className="mb-8 leading-relaxed text-pacul-light/80">
            Mendorong aksi kolektif untuk masa depan hijau Indonesia.
          </p>

          <p className="text-sm text-pacul-light/60">
            &copy; {new Date().getFullYear()} PACUL. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 md:gap-16">
          <FooterColumn
            title="Community"
            links={[
              { label: 'Join Us', href: '/' },
              { label: 'Events', href: '/' },
              { label: 'Forum', href: '/' },
            ]}
          />

          <FooterColumn
            title="Guidelines"
            links={[
              { label: 'Rules', href: '/' },
              { label: 'Safety', href: '/' },
              { label: 'FAQ', href: '/' },
            ]}
          />

          <FooterColumn
            title="Privacy"
            links={[
              { label: 'Terms', href: '/' },
              { label: 'Data Policy', href: '/' },
            ]}
          />

          <FooterColumn
            title="Partnerships"
            links={[
              { label: 'Collaboration', href: '/' },
              { label: 'Sponsors', href: '/' },
            ]}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <p className="text-sm text-pacul-light/60">
          Bersama menciptakan komunitas hijau yang lebih berkelanjutan.
        </p>

        <div className="flex items-center gap-4">
          <SocialIcon label="Website" icon={Globe} />
          <SocialIcon label="Community" icon={Share2} />
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-pacul-light/90">
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-pacul-light/75 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SocialIconProps {
  icon: LucideIcon;
  label: string;
}

function SocialIcon({
  icon: Icon,
  label,
}: SocialIconProps) {
  return (
    <Link
      href="/"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-pacul-primary transition-all duration-200 hover:scale-105 hover:bg-pacul-light"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

import { NavLink } from 'react-router';

import { Clapperboard, Ticket, UserRound } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button/button';
import { Typography } from '@/shared/ui/typography';

const navItems = [
  { to: '/', label: 'Афиша', icon: Clapperboard },
  { to: '/profile/tickets', label: 'Билеты', icon: Ticket },
  { to: '/profile', label: 'Профиль', icon: UserRound },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background pb-safe">
      <div className="flex h-16 w-full items-center">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Button
            key={to}
            variant="ghost"
            asChild
            className="flex h-full flex-1 flex-col gap-0.5 rounded-none"
          >
            <NavLink to={to} end={to === '/' || to === '/profile'}>
              {({ isActive }) => (
                <>
                  <Icon
                    className={cn(
                      'size-6 text-nav-foreground',
                      isActive && 'text-primary',
                    )}
                  />
                  <Typography
                    variant="label"
                    className={cn(isActive && 'text-primary')}
                  >
                    {label}
                  </Typography>
                </>
              )}
            </NavLink>
          </Button>
        ))}
      </div>
    </nav>
  );
}

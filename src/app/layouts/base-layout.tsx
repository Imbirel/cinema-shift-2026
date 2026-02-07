import { Outlet, useLocation } from 'react-router';

import { cn } from '@/shared/lib/cn';
import { Header } from '@/widgets/header';
import { MobileNav } from '@/widgets/mobile-nav';

export function BaseLayout() {
  const { pathname } = useLocation();

  const isMobileNavVisible = ['/', '/profile', '/profile/tickets'].includes(
    pathname,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block">
        <Header />
      </div>

      <main
        className={cn(
          'flex-1 flex flex-col max-w-content mx-auto px-4 w-full',
          isMobileNavVisible &&
            'pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0',
        )}
      >
        <Outlet />
      </main>

      {isMobileNavVisible && (
        <div className="block md:hidden bottom-0 z-50">
          <MobileNav />
        </div>
      )}
    </div>
  );
}

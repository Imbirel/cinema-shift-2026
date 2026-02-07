import { Link } from 'react-router';

import { LogIn } from 'lucide-react';

import { ThemeToggle } from '@/features/theme-toggle';
import { Button } from '@/shared/ui/button/button';
import { Logo } from '@/shared/ui/logo/logo';

export function Header() {
  return (
    <header className="h-20.5 border-b border-border">
      <div className="max-w-content mx-auto h-full flex items-center justify-between px-4">
        <div>
          <Link to="/">
            <Logo className="text-primary" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <LogIn className="size-5" />
            Войти
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';

import { LogIn, Moon, Sun } from 'lucide-react';

import { Logo } from '@/components/Layout/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark'
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="h-20.5 border-b">
      <div className="max-w-content mx-auto h-full flex items-center justify-between px-1">
        <div>
          <a href="/">
            <Logo className="text-primary" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <LogIn className="size-5" />
            Войти
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-foreground/50 dark:text-foreground"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}

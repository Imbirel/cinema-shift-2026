import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/ui/button/button';

import { useTheme } from '../model/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full text-foreground/50 dark:text-foreground"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

import { useEffect, useState } from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  type ThemeType,
} from '@/shared/config/theme/theme-constants';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType;

      if (Object.values(Theme).includes(saved)) return saved;

      return document.documentElement.classList.contains(Theme.DARK)
        ? Theme.DARK
        : Theme.LIGHT;
    }
    return Theme.LIGHT;
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === Theme.DARK) {
      root.classList.add(Theme.DARK);
    } else {
      root.classList.remove(Theme.DARK);
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    isDark: theme === Theme.DARK,
  };
}

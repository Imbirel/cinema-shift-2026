export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

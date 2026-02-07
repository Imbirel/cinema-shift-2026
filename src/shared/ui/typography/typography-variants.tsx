import { cva } from 'class-variance-authority';

export const typographyVariants = cva('text-foreground scroll-m-20', {
  variants: {
    variant: {
      h1: 'text-xl md:text-5xl font-semibold md:font-bold leading-6 md:leading-14',
      h2: 'text-2xl font-bold leading-8',
      h3: 'text-xl font-semibold leading-6',
      h4: 'text-xl font-medium',
      p: 'text-sm font-normal leading-5 text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      label: 'text-2xs font-normal leading-3 text-nav-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

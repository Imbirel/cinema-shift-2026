import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground scroll-m-20', {
  variants: {
    variant: {
      h1: 'text-5xl font-bold leading-14', // +
      h2: 'text-2xl font-bold leading-8', // +
      h3: 'text-xl font-semibold leading-6',
      h4: 'text-xl font-medium',
      p: 'text-sm font-normal leading-5 text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type TypographyBaseProps<T extends React.ElementType> = {
  as?: T;
} & VariantProps<typeof typographyVariants>;

type TypographyProps<T extends React.ElementType> = TypographyBaseProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyBaseProps<T>>;

export type TypographyVariant = VariantProps<
  typeof typographyVariants
>['variant'];

export function Typography<T extends React.ElementType = 'p'>({
  className,
  variant = 'p',
  as,
  ...props
}: TypographyProps<T>) {
  const Component = as || (variant as React.ElementType) || 'p';

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

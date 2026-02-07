import * as React from 'react';

import { type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/cn';
import { typographyVariants } from './typography-variants';

const variantElementMap: Record<string, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  code: 'code',
  label: 'span',
};

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
  const Component = as ?? variantElementMap[variant as string] ?? 'p';

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

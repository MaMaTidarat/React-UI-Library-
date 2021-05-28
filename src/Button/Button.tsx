import React, { PropsWithChildren } from 'react';

export type ButtonProps = {
  primary?: boolean;
} & JSX.IntrinsicElements['button'];

const baseClassName =
  'bg-blue-500  hover:bg-blue-300 focus:ring-blue-400 focus:ring-opacity-75';
const primaryClassName =
  'bg-green-500  hover:bg-green-300 focus:ring-green-400 focus:ring-opacity-75';

export const Button = ({
  children,
  primary,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={`py-2 px-4 font-semibold rounded-lg shadow-md  text-white ${
      primary ? primaryClassName : baseClassName
    }`}
    {...props}
  >
    {children}
  </button>
);

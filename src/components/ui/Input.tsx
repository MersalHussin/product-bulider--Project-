// src/components/ui/Input.tsx

import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="border-2 border-gray-300 rounded-md p-2 focus:outline-blue-500"
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
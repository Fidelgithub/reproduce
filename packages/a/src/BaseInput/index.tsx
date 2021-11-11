import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';

const BaseInput: React.FC<InputProps & { clearAllSpace?: boolean }> = (
  props,
) => {
  return (
    <Input
      {...props}
      onBlur={(e) => {
        if (props.clearAllSpace) {
          e.target.value = e.target.value.replace(/\s/g, '');
        } else {
          e.target.value = e.target.value.trim();
        }
        props.onChange?.(e);
      }}
    />
  );
};
export default BaseInput;

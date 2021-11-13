import React, { CSSProperties, DetailedHTMLProps } from 'react';
import { ExtendProps } from './FlexProps';

const Flex: React.FC<
  ExtendProps &
    DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  column,
  className,
  style,
  justifyContent,
  alignItems,
  flexWrap,
  children,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        flexDirection: column ? 'column' : undefined,
        justifyContent,
        alignItems,
        flexWrap,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;

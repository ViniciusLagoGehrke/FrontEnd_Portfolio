import React from 'react';
import { StackProp } from '../types';

function Stack({
  children,
  spacing = 2,
  direction = 'row',
  wrap = false,
}: StackProp) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? ('wrap' as const) : ('nowrap' as const),
    flexDirection: direction,
  };
  return <div style={style}>{children}</div>;
}

export default Stack;

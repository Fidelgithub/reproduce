import React from 'react';

export interface ExtendProps {
  /**
   * @description 主轴是否纵向排列
   * @default false
   */
  column?: boolean;
  /**
   * @description 项目在主轴上的对齐方式
   * @default "flex-start"
   */
  justifyContent?:
    | 'space-around'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between';
  /**
   * @description 项目在交叉轴上如何对齐
   * @default "stretch"
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**
   * @description 如果一条轴线排不下，如何换行
   * @default "nowrap"
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const Flex: React.FC<ExtendProps> = (props) => null;

export default Flex;

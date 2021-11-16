import React, { ReactNode } from 'react';

export interface PageContainerProps {
  /**
   * @description 辅助自定义class名称，非必需
   */
  className?: string;
  /**
   * @description 页面内容标题，必须
   */
  content: string;
  /**
   * @description 头部右侧操作项，非必需，操作项之间间距8px
   */
  extra?: ReactNode[];
  /**
   * @description 页面具体内容，必须
   */
  children: ReactNode;
  /**
   * @description 底部悬浮bar里面的内容，内容具体样式自定义，非必需，footer有值页面内容最小高度满足footer吸底
   */
  footer?: ReactNode;
}

export default (props: PageContainerProps) => null;

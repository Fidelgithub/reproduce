import React, { ReactNode, ReactChildren } from 'react';
import classnames from 'classnames';
import { Space } from 'antd';
import styles from './index.module.less';
import { PageContainerProps } from './PageContainerProps';

//规范页面整体布局，样式内容包含：左右16px间距、2px四周圆角、白色背景、高度56px的头部，可选择展示的高度54px的底部悬浮bar样式。
const PageContainer: React.FC<PageContainerProps> = ({
  className,
  content,
  extra,
  children,
  footer,
}) => {
  return (
    <div
      className={classnames(
        styles.pageContainer,
        { [styles.hasFooter]: !!footer },
        className,
      )}
    >
      <div className={classnames(styles.container)}>
        <div className={styles.header}>
          <div className={styles.pageTitle}>{content}</div>
          <div className={styles.block} />
          {extra && (
            <Space size={8}>
              {extra.map((v, i) => (
                <span key={i}>{v}</span>
              ))}
            </Space>
          )}
        </div>
        {children}
      </div>
      {footer ? (
        <div className={styles.footer}>{footer}</div>
      ) : (
        <div className={styles.mb24} />
      )}
    </div>
  );
};
export default PageContainer;

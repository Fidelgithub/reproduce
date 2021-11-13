---
title: 弹性盒子
group:
  path: /
nav:
  title: 组件
  path: /components
---

## Flex

flex 容器

基础用法:

```tsx
import React from 'react';
import { Flex } from 'a-test';

export default () => (
  <Flex justifyContent="space-around" style={{ color: '#fff' }}>
    <div style={{ backgroundColor: 'red' }}>项目1</div>
    <div style={{ backgroundColor: 'blue' }}>项目2</div>
    <div style={{ backgroundColor: 'green' }}>项目3</div>
  </Flex>
);
```

纵向主轴:

```tsx
import React from 'react';
import { Flex } from 'a-test';

export default () => (
  <Flex column style={{ color: '#fff' }}>
    <div style={{ backgroundColor: 'red' }}>项目1</div>
    <div style={{ backgroundColor: 'blue' }}>项目2</div>
    <div style={{ backgroundColor: 'green' }}>项目3</div>
  </Flex>
);
```

<API src="./FlexProps.tsx"></API>

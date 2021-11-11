import { defineConfig } from 'dumi';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  title: '复现',
  favicon:
    'https://qimai-1251581441.cos.ap-shanghai.myqcloud.com/qimai-pc/favicon.ico',
  logo: 'https://qimai-1251581441.cos.ap-shanghai.myqcloud.com/qimai-pc/favicon.ico',
  outputPath: 'docs-dist',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  mode: 'site', // doc,site
  theme: {
    '@primary-color': '#4a86ff',
    '@success-color': '#52c41a',
    '@processing-color': '#52c41a',
    '@error-color': '#fa4d4f',
    '@highlight-color': '#fa4d4f',
    '@warning-color': '#faad14',
  },
  define: {
    'process.env.REACT_APP_ENV': REACT_APP_ENV,
  },
  mfsu: {},
  webpack5: {},
  // more config: https://d.umijs.org/config
});

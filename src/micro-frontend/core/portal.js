// 定义子应用注册表
const subApps = [
  { // 组件方式提供的子应用 (上一步方式1)
    type: 'component',
    id: 'header',
    entry: 'https://domain.com/path/to/entry1.js'
  },
  { // 自行挂载 DOM 的子应用 (上一步方式2)
    type: 'app',
    id: 'user-page',
    entry: 'https://domain.com/path/to/entry2.js',
    path: '/user' // 子应用路由
  }
]

// 方式1: 加载远程子应用并渲染其组件
import { lazy } from 'react';
const RemoteComponent = lazy(import(/* webpackIgnore: true */ subApp.entry));
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RemoteComponent />
    </Suspense>
  )
}

// 方式二：加载子应用（子应用自行挂载 DOM)
if (location.path === subApp.path) {
  // 这里的路由匹配只是一种场景，可以根据其他条件来按需加载子应用
  fetch(subApps.entry);
}
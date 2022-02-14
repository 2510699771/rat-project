import React from 'react';
import RootRouter from './router/RootRouter.jsx'
export default function App() {
  return (
    //懒加载
    <React.Suspense fallback={<h1>加载中...</h1>}>
      <RootRouter></RootRouter>
    </React.Suspense>
  )
}

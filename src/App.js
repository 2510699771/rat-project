import React from 'react';
// 通过路由依赖包，引入相关组件
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom';
// 引入路由对应的页面组件
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
// import Register from './pages/register/Register.jsx';
// 路由组件懒加载 放在import之后
const Register = React.lazy(() => import('./pages/register/Register'));
const Error = React.lazy(() => import('./pages/error/Error'))
export default function App() {
  return (
    //懒加载
    <React.Suspense fallback={<h1>加载中...</h1>}>
      <HashRouter>
        <Switch>
          {/* 重定向 需要精准匹配不然所有的路由都会是home页面*/}
          <Redirect exact from='/' to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {/* 404 页面 下面把路径也会变成404*/}
          <Route path="/404" component={Error}></Route>
          <Redirect exact from='*' to="/404"></Redirect>
        </Switch>
      </HashRouter>
    </React.Suspense>
  )
}

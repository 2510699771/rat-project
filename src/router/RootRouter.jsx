import React from 'react'
// 通过路由依赖包，引入相关组件
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// 引入路由对应的页面组件
import Login from '../pages/login/Login';
import Index from '../pages/index';
// 路由组件懒加载 放在import之后
const Register = React.lazy(() => import('../pages/register/Register'));
const Error = React.lazy(() => import('../pages/error/Error'))
export default function RootRouter() {
    return (
        <HashRouter>
            <Switch>
                {/* 重定向 需要精准匹配不然所有的路由都会是home页面*/}
                <Route path="/login" component={Login}></Route>
                {/* <Route path="/register" component={Register}></Route> */}
                {/* <Redirect exact from='/' to="/home"></Redirect> */}
                <Route path="/"  component={Index}></Route>
                {/* 404 页面 下面把路径也会变成404*/}
                {/* <Route path="/404" component={Error}></Route>
                <Redirect exact from='*' to="/404"></Redirect> */}

            </Switch>
        </HashRouter>
    )
}

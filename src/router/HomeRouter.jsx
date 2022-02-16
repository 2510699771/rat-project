import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Users from '../pages/users/Users'
import Categories from '../pages/products/categories/Categories'
import Roles from '../pages/roles/Roles'
import List from '../pages/products/list/List'
import AddList from '../pages/products/addList/AddList'
export default function HomeRouter() {
    return (
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/users' component={Users}></Route>
            <Route path='/roles' component={Roles}></Route>
            <Route path='/products/list' component={List}></Route>
            <Route path='/list/addList' component={AddList}></Route>
            <Route path='/products/categories' component={Categories}></Route>
        </Switch>
    )
}

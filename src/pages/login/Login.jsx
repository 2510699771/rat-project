import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from'./login.css'
export default class Login extends Component {
  render() {
    return (
      <div>
        <div className={styles.active}>2222</div>
        <Link to="/register">没有账号？去注册</Link>
        <div></div>
        {/* NavLink相对比 Link可以给一个选中*/}
        <NavLink to="/register" activeClassName={styles.active}>没有账号？去注册</NavLink>
      </div>
    )
  }
}

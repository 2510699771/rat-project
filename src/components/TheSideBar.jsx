import React, { Component } from 'react'
import { UserOutlined, LaptopOutlined, NotificationOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
const { SubMenu } = Menu;
class TheSideBar extends Component {
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={[this.props.history.location.pathname]}
                defaultOpenKeys={['products','finances']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="/home" icon={<HomeOutlined />}>
                    <Link to='/home'>首页</Link>
                </Menu.Item>
                <Menu.Item key="/users" icon={<UserOutlined />}>
                    <Link to='/users'>用户管理</Link>
                </Menu.Item>
                <Menu.Item key="/roles" icon={<TeamOutlined />}>
                    <Link to='/roles'>角色</Link>
                </Menu.Item>
                <SubMenu key="products" icon={<LaptopOutlined />} title="商品管理">
                    <Menu.Item key="/products/categories"> <Link to='/products/categories'>品种管理</Link></Menu.Item>
                    <Menu.Item key="/products/list"><Link to='/products/list'>商品列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="finances" icon={<NotificationOutlined />} title="信息统计">
                    <Menu.Item key="6">交易流水</Menu.Item>
                    <Menu.Item key="73">销售业绩</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
export default withRouter(TheSideBar)

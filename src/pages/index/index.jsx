import React, { Component } from 'react';
import './index.css'

import TheSideBar from '../../components/TheSideBar';
import HomeRouter from '../../router/HomeRouter';
import { Layout, Menu, Breadcrumb } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs';
const { Header, Content, Sider } = Layout;
export default class Index extends Component {
  render() {
    return <div>
      <Layout className='homecontainer'>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <TheSideBar></TheSideBar>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumbs></Breadcrumbs>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* 二级路由配置 */}
              <HomeRouter></HomeRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>,
    </div>;
  }
}

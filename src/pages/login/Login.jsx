import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './login.moudel.css'
import { Form, Input, Button, Checkbox, Card } from 'antd';
export default class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
    localStorage.user = JSON.stringify(values)
    this.props.history.replace('/home')
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div style={{ width: '100%', display: 'flex', 'alignItems': 'center', 'justifyContent': 'center', height: '100vh' }}>
        <Card title="登陆" style={{ width: 500 }}>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>

      </div>
    )
  }
}

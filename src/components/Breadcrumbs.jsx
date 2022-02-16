import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

const arr={
    
}
export default class Breadcrumbs extends Component {
    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>22</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

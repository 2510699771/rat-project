import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export default class AddCategories extends Component {
    state = {
        category: {}
    }
    onValuesChange = (val) => {
        this.setState({
            category: { ...this.state.category, ...val }
        }, () => {
            console.log(this.state.category);
        })
    }
    onGenderChange = () => { }
    render() {
        return (
            <Form {...layout} name="control-hooks" onValuesChange={this.onValuesChange}>
                <Form.Item
                    name="name"
                    label="分类名称"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="分类等级"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="请选择"
                        onChange={this.onGenderChange}
                        allowClear
                    >
                        <Option value="一级分类">一级分类</Option>
                        <Option value="二级分类">二级分类</Option>
                    </Select>
                </Form.Item>
            </Form>
        )
    }
}

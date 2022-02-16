import React, { Component } from 'react'
import { Button, Card, Form, Input, Radio, Select, Cascader, Checkbox, DatePicker, InputNumber, TreeSelect, Switch, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { createRef } from 'react';


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export default class AddList extends Component {
    state = {
        componentSize: 'default',
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error',
            },
        ],
        addProduct: {}
    }
    fromRef = createRef()
    componentDidMount() {
        setTimeout(() => {
            this.fromRef.current.setFieldsValue(
                {
                    addProduct: {
                        name1: 'name1', name2: true, name3: 3, remember: true
                    }
                }
            )
            console.log(11);
        }, 1000)
    }
    onFormLayoutChange = (val) => {
        console.log(val);
        // this.setState({
        //     componentSize: size
        // })
    };
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => {
        this.setState({ fileList })
        //上传组件需要重新覆盖表带对象中的传给后端对象中的字段******上传---级联等 比如想要type:字符串 获取到的却是数组 则需要重新处理对应字段
    }
    handleCancel = () => this.setState({ previewVisible: false });
    render() {
        const { previewVisible, previewImage, fileList, previewTitle, addProduct } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <Card title="新增列表" extra={<Button type="link" style={{ width: 200 }} block onClick={() => {
                this.props.history.push('/products/list')
                console.log(this.props);
            }}>返回</Button>} >
                <Form
                    ref={this.fromRef}
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    layout="horizontal"
                    initialValues={addProduct}
                    onValuesChange={this.onFormLayoutChange}
                    size={this.state.componentSize}
                >
                    <Form.Item label="Input" name={['addProduct', 'name1']}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['addProduct', 'remember']} valuePropName="checked" wrapperCol={{ offset: 2, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <Form.Item name={['addProduct', 'name2']} noStyle>
                            <InputNumber min={1} max={10} />
                        </Form.Item>
                        <span className="ant-form-text"> machines</span>
                    </Form.Item>
                    {/* <Form.Item label="TreeSelect" name={['addProduct', 'name3']}>
                        <TreeSelect
                            treeData={[
                                {
                                    title: 'Light',
                                    value: 'light',
                                    children: [
                                        {
                                            title: 'Bamboo',
                                            value: 'bamboo',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader" name={['addProduct', 'name4']}>
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker" name={['addProduct', 'name5']}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber" name={['addProduct', 'name6']}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Switch" valuePropName="checked" name={['addProduct', 'name7']}>
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Button" name={['addProduct', 'name8']}>
                        <Button>Button</Button>
                    </Form.Item>
                    <Form.Item label="Button" name={['addProduct', 'name9']}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Form.Item> */}
                </Form>
            </Card>
        )
    }
}

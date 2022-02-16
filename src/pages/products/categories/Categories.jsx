import React, { Component, createRef } from 'react'
import { Table, Tag, Space, Card, Modal, Button } from 'antd';
import { getCategoriesAsync } from '../../../api/categories'
import { connect } from 'react-redux'
import { getCategoriesAsyncAction } from '../../../redux/actions/categoriesActions.js'
import AddCategories from './AddCategories';
class Categories extends Component {
  state = {
    data: [],
    isModalVisible: true
  }
  childRef = createRef()
  componentDidMount() {
    this.getList()
  }
  getList = () => {
    console.log(this.props)
    this.props.dispatch(getCategoriesAsyncAction({ parentId: 0 }))
    // const res = await getCategoriesAsync({ parentId: 0 })
    // if (res.code) {
    //   this.setState({
    //     data: res.data.data
    //   })
    // }
  }
  showModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  handleOk = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
    console.log('子组件ref', this.childRef);
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    const { data, isModalVisible } = this.state
    return (
      <>
        <Card size="small" title="品类管理" extra={<a href="#">添加分类</a>} >
          <Table columns={columns} dataSource={data} />
        </Card>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal title="新增分类" okText='确认' cancelText='取消' visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <AddCategories ref={this.childRef}></AddCategories>
        </Modal>
      </>


    )
  }
}
const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Categories)
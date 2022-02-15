import React, { Component } from 'react'
import { Table, Tag, Space, Card } from 'antd';
import { getCategoriesAsync } from '../../../api/categories'
import { connect } from 'react-redux'
import { getCategoriesAsyncAction } from '../../../redux/actions/categoriesActions.js'
class Categories extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.getList()
  }
  getList = () => {
    console.log(this.props)
    this.props.dispatch({ type: 'ceshi' })
    // this.props.dispatch(getCategoriesAsyncAction({ parentId: 0 }))
    // const res = await getCategoriesAsync({ parentId: 0 })
    // if (res.code) {
    //   this.setState({
    //     data: res.data.data
    //   })
    // }
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
    const { data } = this.state
    return (
      <Card size="small" title="品类管理" extra={<a href="#">添加分类</a>} >
        <Table columns={columns} dataSource={data} />
      </Card>

    )
  }
}
const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Categories)
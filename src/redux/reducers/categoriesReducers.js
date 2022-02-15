import { handleActions } from 'redux-actions'
import types from '../actionTypes'
const initialState = {}

const categotiesReducer = handleActions({
    [types.GET_CATEGORIES_ASYNC]: (state, { payload }) => ({
        ...state,
        todos: [{
            "_id": "5fbf756526420000dc005032",
            "createDate": "1970-01-01T00:00:00.000Z",
            "delstate": 1,
            "imgSrc": "img/1.jpg",
            "msg": "iPhone 12采用后置双摄像头，有紫色、白色、绿色、黄色、黑色、红色六种颜色。宽：75.7毫米，高：150.9毫米，厚：8.",
            "name": "IPhone12",
            "price": 5999,
            "state": 1,
            "title": "Iphone12搭载最新的处理器，双面玻璃材质",
            "type": {
                "_id": "5fbccd4aea6c0000ff007f33",
                "createDate": null,
                "name": "数码产品",
                "parentId": "0",
                "type": "一级分类",
                "updateDate": null
            },
            "updateDate": "1970-01-01T00:00:00.000Z"
        },
        {
            "_id": "5fbf76a426420000dc005033",
            "createDate": "1970-01-01T00:00:00.000Z",
            "delstate": 1,
            "imgSrc": "img/2.jpg",
            "msg": "商品名称：AppleMacBook Pro 13.3商品编号：100009464821商品毛重：2.8kg商品产地：中国大陆屏幕尺寸：13.0英寸-13.9英寸系列：其他分辨率：超高清屏（2K/2.5K/3K/4K）类型：高端轻薄笔记本处理器：其他系统：MAC内存容量：8G厚度：15.1mm—18.0mm屏幕刷新率：其他固态硬盘（SSD）：256GB显卡类别：集成显卡显卡型号：其他机械硬盘：无机械硬盘显卡芯片供应商：其他颜色：灰色",
            "name": "Apple MacBook Pro ",
            "price": 9999,
            "state": 1,
            "title": "Apple MacBook Pro 13.3 新款八核M1芯片 8G 256G SSD 深空灰 笔记本电脑 轻薄本 MYD82CH/A",
            "type": {
                "_id": "5fbcd0a3ea6c0000ff007f42",
                "createDate": null,
                "name": "电脑",
                "parentId": "5fbccd4aea6c0000ff007f33",
                "type": "二级分类",
                "updateDate": null
            },
            "updateDate": "1970-01-01T00:00:00.000Z"
        },]
    })
}, initialState)

export default categotiesReducer

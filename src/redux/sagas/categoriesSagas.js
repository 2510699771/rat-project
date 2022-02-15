import { takeEvery } from 'redux-saga/effects'
import types from '../actionTypes'
import { getCategoriesAsync } from '../../api/categories'
//2.侦听的 type被dispatch时要执行的函数
function* getCategoties(action) {
    console.log(111111111111111111);
    console.log(action, 'action');
    // const res = yield getCategoriesAsync(action.paylod)
    // console.log(res);
}
// 1.创建一个侦听函数
function* watchCategories() {
    // 第一个参数：侦听的 action 的 type 值
    // 第二个参数：侦听的 type被dispatch时要执行的函数
    yield takeEvery(types.GET_CATEGORIES_ASYNC, getCategoties)

}
//最后，将侦听函数暴露出去：

export default watchCategories;
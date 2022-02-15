import watchCategories from "./sagas/categoriesSagas";
import { all } from 'redux-saga/effects'

function* rootsaga(params) {
    yield all([watchCategories()])
}
export default rootsaga 
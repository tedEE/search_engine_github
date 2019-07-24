import { put, call, takeLatest, select} from 'redux-saga/effects'
import {getName} from "./index";

export function* chengisUrl(){
    let subject = yield select(getName);
    let url = `https://api.github.com/search/repositories?q=${subject}`;
    const api_url = yield call(()=>{
        return fetch(url)
            .then(response =>{
                return response.json()}) });
    const result = api_url.items;
    yield put({type : 'ADD_ELEM', payload : result});
}

export default function* mySaga() {
    yield takeLatest("FETCH_REQUESTED", chengisUrl);
}

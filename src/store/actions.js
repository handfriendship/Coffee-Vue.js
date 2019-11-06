import axios from 'axios';
import state from './states.js';
import {FETCH_MEMOS, ADD_MEMO, DELETE_MEMO, EDIT_MEMO} from './mutations-types.js';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
});

export function fetchMemos ({commit}) {
  memoAPICore.get('/')
    .then(res => {
      commit(FETCH_MEMOS, res.data);
    });
}
export function addMemo (context, payload){
  memoAPICore.post('/', payload).then(res => {
    context.commit(ADD_MEMO, res.data)
  })
}
export function deleteMemo(context, id){
  var targetIndex = state.memos.findIndex(v => v.id === id);
  console.log("targetIndex in delMemo : ", targetIndex);
  memoAPICore.delete(`/${id}`).then(res => {
    // state.memos.splice(targetIndex, 1);
    context.commit(DELETE_MEMO, id);
  }).catch(error => {
    console.log("failed");
  })
}
export function editMemo(context, payload){
  const {id, content} = payload;
  memoAPICore.put(`/${id}`, { content })
    .then(() => {
      context.commit(EDIT_MEMO, payload)
      // state.memos.splice(targetIndex, 1, {...state.memos[targetIndex], content:newContent});
    });
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  editMemo,

}

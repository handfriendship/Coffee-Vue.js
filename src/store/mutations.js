import {FETCH_MEMOS, ADD_MEMO, DELETE_MEMO, EDIT_MEMO, SET_EDITINGID, RESET_EDITINGID} from './mutations-types.js';

export default {
  [ADD_MEMO] (state, payload){
    state.memos.push(payload);
  },
  [DELETE_MEMO]: function(state, id){
    var targetIndex = state.memos.findIndex(v => v.id === id);
    state.memos.splice(targetIndex, 1);
  },
  [EDIT_MEMO]: function(state, payload){
    var {content, id} = payload;
    var targetIndex = state.memos.findIndex(v => v.id === id);
    state.memos.splice(targetIndex, 1, {...state.memos[targetIndex], content:payload.content});
  },
  [FETCH_MEMOS] (state, payload){
    state.memos = payload;
  },
  isclickedFalse: function(state){
    state.isclicked = false;
  },
  isclickedTrue: function(state){
    state.isclicked = true;
  },
  [SET_EDITINGID] (state, payload){
    console.log("mutations => SET_EDITINGID called!");
    state.EditingId = payload;
  },
  [RESET_EDITINGID] (state, payload){
    console.log("mutations => RESET_EDITINGID called!");
    state.EditingId = 0;
  }
}

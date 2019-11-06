
export default {
  getLength: function(state){
    return state.memos.length;
  },
  getMemos: function(state){
    return state.memos;
  },
  getIsClicked: function(state){
    return state.isclicked;
  },
  
}

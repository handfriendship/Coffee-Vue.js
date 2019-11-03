// {
//   addMemo: function(state, payload){
//     memoAPICore.post('/', payload).then(res => {
//       state.memos.push(res.data);
//     })
//   },
//   delMemo: function(state, id){
//     console.log("id : ", id);
//     var targetIndex = state.memos.findIndex(v => v.id === id);
//     memoAPICore.delete(`${id}`).then(res => {
//       state.memos.splice(targetIndex, 1);
//     }).catch(error => {
//       console.log("failed");
//     })
//   },
//   updateMemo: function(state, newContent, id){
//     var targetIndex = this.memos.findIndex(element => element.id === id);
//     memoAPICore.put(`/${id}`, {...state.memos[targetIndex], content:newContent})
//       .then(res => {
//         state.memos.splice(targetIndex, 1, {...state.memos[targetIndex], content:newContent});
//       });
//   },
// }

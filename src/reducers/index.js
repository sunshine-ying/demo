// import counter from './counter';
// import combineReducers from 'redux'
// // export default combineReducers({counter,auth})

// export default combineReducers({
//     counter
// })
// const dataObj = {
//     a:6,
//     // todos:[]
// }
export default(state = {a :68}, action) => {
    // console.log(action)
    let data = action.data ? action.data : 1
    switch (action.type){
        case 'ADD':
            return {
                a:state.a += data
            }
        case 'JIAN':
            return {
                a:state.a -= data
            }
    }
    return state;
}
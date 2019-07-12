// const dataObj = {
//     a:6,
//     // todos:[]
// }
export default(state = {a :6}, action) => {
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
export default function(state = {
    users:[]
 }, action){
    
    switch(action.type){
        case 'USER_LIST':
         return { ...state, users:action.payload}
         default:
             return state;
    }
}
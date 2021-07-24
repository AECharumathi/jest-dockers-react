export default function(state = {
    courses: []
}, action){
    switch(action.type){
        case 'COURSE_LIST':
         return { ...state, courses:action.payload}
         default:
             return state;
    }
}
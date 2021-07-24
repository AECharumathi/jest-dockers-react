import courseReducer from "../reducers/coursesReducers";
import commentReducer from "../reducers/commentReducer";
import userReducer from "../reducers/usersReducers";

describe('CourseReducer', ()=>{
    it('should return the initial state', ()=>{
        expect(JSON.stringify(courseReducer(undefined,{}))).toEqual(JSON.stringify({
            courses:[]
        }
        ))
    })
    it('reducer test for COURSE_LIST',()=>{
        let state = {
            courses: []
        }
        state = courseReducer(state,{
            action: "COURSE_LIST"
        })
        expect(state).toEqual({
            courses:[]
        })
    })
})

describe('CommentReducer', ()=>{
    it('should return the initial state', ()=>{
        expect(JSON.stringify(commentReducer(undefined,{}))).toEqual(JSON.stringify({
            commentList:[]
        }
        ))
    })
    it('reducer test for COMMENT_LIST',()=>{
        let state = {
            commentList: []
        }
        state = commentReducer(state,{
            action: "COMMENT_LIST"
        })
        expect(state).toEqual({
            commentList:[]
        })
    })
})

describe('UserReducer', ()=>{
    it('should return the initial state', ()=>{
        expect(JSON.stringify(userReducer(undefined,{}))).toEqual(JSON.stringify({
            users:[]
        }
        ))
    })
    it('reducer test for COMMENT_LIST',()=>{
        let state = {
            users: []
        }
        state = userReducer(state,{
            action: "USER_LIST"
        })
        expect(state).toEqual({
            users:[]
        })
    })
})
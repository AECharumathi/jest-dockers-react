import axios from 'axios';

const url = "http://localhost:8001";
const url2 = "http://localhost:8002";

export function getCourses() {
    const data = axios.get(url + "/courses").then(response => response)
    return {
        type: "COURSE_LIST",
        payload: data
    }
}

export function getUsers() {
    const data = axios.get(url + "/usersEnquired").then(response => response)
    return {
        type: "USER_LIST",
        payload: data
    }
}

export function postEnquiry(userDetails, onSuccess) {
    const data = axios.post(url + "/usersEnquired", userDetails).then((response) => {
        if (response.status === 201) {
            alert("COURSE ENQUIRY SUCCESSFUL");
            onSuccess();
        }
    }).catch(() => alert("Please try again later"))

}

export function postComment(commentDetails, onSuccessComment) {
    const data = axios.post(url2 + "/userForum", commentDetails).then((response) => {
        if (response.status === 201) {
            onSuccessComment();
        }
    }).catch(() => alert("Please try again later"))

}

export function getComment() {
    const data = axios.get(url2 + "/userForum").then(response => response)

    return {
        type: 'COMMENT_LIST',
        payload: data
    }
}
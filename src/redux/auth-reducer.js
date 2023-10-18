import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me(`auth/me`).then(data => {
        if (data.resultCode === 0) {
            let {userId, login, email} = data.data
            dispatch(setAuthUserData(userId, email, login));
        }
    })
}

export const getLogin = () => (dispatch) => {
    authAPI.login().then(data => {
        
    })
}
export default authReducer;
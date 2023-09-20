const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
    //     {id: 1, followed: false, fullName: 'Viktor', status: 'Bo$$', location: {city: 'Praha', country: 'CZ'}},
    //     {id: 2, followed: false, fullName: 'Oleh', status: 'Bo$$', location: {city: 'Jihlava', country: 'CZ'}},
    //     {id: 3, followed: true, fullName: 'Max', status: 'Bo$$', location: {city: 'Dnipro', country: 'Ukraine'}},
    //     {id: 4, followed: true, fullName: 'Dmitry', status: 'Bo$$', location: {city: 'Minsk', country: 'Belarus'}},
     ],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => ({type:SET_USERS, users})


export default usersReducer;
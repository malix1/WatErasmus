const initState = {authError:null}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log("success");
            return {...state, authError:null}
        case  'LOGIN_FAILED':
            console.log("error");
            return {...state,
            authError: 'login failed'}
        default:
            return state
    }
}

export default authReducer;
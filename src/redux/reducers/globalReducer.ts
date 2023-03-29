import { GlobalAction, LogoutActionType } from '../globalActionTypes'

interface IGlobalState {
    loading: boolean
}

const initialState = {
    loading: false,
}

const globalReducer = (state: IGlobalState = initialState, action: GlobalAction): IGlobalState => {
    switch (action.type) {
        case LogoutActionType.LOGOUT_PENDING:
            return {
                ...state,
                loading: true,
            }
        case LogoutActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LogoutActionType.LOGOUT_FAIL:
        default:
            return state
    }
}

export default globalReducer

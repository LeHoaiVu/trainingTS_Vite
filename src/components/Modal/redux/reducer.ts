import { ModalAction, ModalActionType } from './actionTypes'

interface IModalState {
    isOpenModal: boolean
}

const initialState = {
    isOpenModal: false,
}

const modalReducer = (state: IModalState = initialState, actions: ModalAction): IModalState => {
    switch (actions.type) {
        case ModalActionType.OPEN_MODAL:
            return {
                ...state,
                isOpenModal: true,
            }
        case ModalActionType.CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        default:
            return state
    }
}

export default modalReducer

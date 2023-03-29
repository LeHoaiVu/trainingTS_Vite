import { Dispatch } from 'redux'
import { ModalAction, ModalActionType } from './actionTypes'

export const openModal = () => (dispatch: Dispatch<ModalAction>) => {
    dispatch({ type: ModalActionType.OPEN_MODAL })
}

export const closeModal = () => (dispatch: Dispatch<ModalAction>) => {
    dispatch({ type: ModalActionType.CLOSE_MODAL })
}

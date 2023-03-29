export enum ModalActionType {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
}

interface modalOpening {
    type: ModalActionType.OPEN_MODAL
}

interface modalClosing {
    type: ModalActionType.CLOSE_MODAL
}

export type ModalAction = modalOpening | modalClosing

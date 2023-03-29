import { Box, Modal, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/hooks/useAppSelector'
import { closeModal } from './redux/actionCreators'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export interface IModalProps {
    title: string
    modalText: string
}

export default function CustomnizeModal(props: IModalProps) {
    const { title, modalText } = props

    const modalSelector = useAppSelector((state) => state.modalReducer?.isOpenModal)
    const dispatch = useDispatch()

    const handleClose = () => dispatch(closeModal())

    return (
        <div className='modal'>
            <Modal
                open={modalSelector}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        {title}
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        {modalText}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

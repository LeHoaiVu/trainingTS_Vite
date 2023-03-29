import * as yup from 'yup'

export const requiredInputField = (message: string) => yup.string().required(message)

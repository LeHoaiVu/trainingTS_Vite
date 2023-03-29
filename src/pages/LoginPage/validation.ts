import * as yup from 'yup'
import { requiredInputField } from '~/utils'

export const schema = yup
    .object({
        username: requiredInputField('username can not be empty'),
        // password: yup.number().positive().integer().required(),
        password: requiredInputField('password can not be empty'),
    })
    .required()

export type FormData = yup.InferType<typeof schema>

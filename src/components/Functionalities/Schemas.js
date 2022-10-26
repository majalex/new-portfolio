import * as yup from "yup";


export const basicSchema = yup.object().shape({
    name: yup.string().min(3, 'Must be at leat 3 characters').required('Required').trim(),
    email: yup.string().email('Email is invalid').required('Email is required'),
    subject: yup.string().min(3, 'Invalid subject').required('Subject is required').trim(),
    message: yup.string().min(3, 'Message is to short').required('Message is required').trim(),
});

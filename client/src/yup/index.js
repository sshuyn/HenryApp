import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Not valid',
    required: "Input required."
  },
  string: {
    email: "You must enter a valid email address.",
    min: "Must have a minimum of ${min} characters.",
    max: "Must have a maximum of ${max} characters."
  }
});

export const registerSchema = yup.object().shape({
  firstName: yup.string()
    .min(2)
    .max(76)
    .required(),
  lastName: yup.string()
    .min(2)
    .max(76)
    .required(),
  email: yup.string()
    .min(5)
    .max(76)
    .email().required(),
  password: yup.string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/, { message: "Password needs at least one number, one lowercase letter and one uppercase letter." })
    .required(),
  repassword: yup.string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/)
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});
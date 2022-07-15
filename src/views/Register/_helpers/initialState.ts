export interface InitialFormState {
  id: string;
  value: string;
  placeholder: string;
  errorMessage: string;
  small: boolean;
  // errorMessageList: {
  //   requiredReason: string;
  //   invalidReason: string;
  // };
}

export const initialFormState: InitialFormState[] = [
  {
    id: 'name',
    value: '',
    placeholder: 'Name',
    errorMessage: '',
    small: true,
    //   errorMessageList: {
    //     requiredReason: 'Name is required',
    //     invalidReason: 'too Short',
    // },
  },
  {
    id: 'lastName',
    value: '',
    placeholder: 'Last Name',
    errorMessage: '',
    small: true,
    //   errorMessageList: {
    //     requiredReason: 'Last Name is required',
    //     invalidReason: 'too Short',
    // },
  },
  {
    id: 'displayName',
    value: '',
    placeholder: 'Display Name',
    errorMessage: '',
    small: false,
  },
  {
    id: 'email',
    value: '',
    placeholder: 'Email',
    errorMessage: '',
    small: false,
  },
  {
    id: 'password',
    value: '',
    placeholder: 'Password',
    errorMessage: '',
    small: false,
  },
];

import { regexCheckEmail } from '../../../utils/regex';
import { FormIndexes } from '../types';
import { getFormField } from './getFormField';
import { FormField } from './initialFormField';

export const validateFormField = (
  form: FormField[],
  fieldIndex: FormIndexes
): string => {
  const { value } = getFormField(form, fieldIndex);

  switch (fieldIndex) {
    case FormIndexes.name:
      if (value === '') return 'name is required';
      if (value.length < 3) return 'name must be at least 3 characters';
      return '';

    case FormIndexes.lastName:
      if (value === '') return 'last name is required';
      if (value.length < 3) return 'name must be at least 3 characters';
      return '';

    case FormIndexes.displayName:
      if (value === '') return 'display name is required';
      if (value.length < 3) return 'name must be at least 3 characters';
      return '';

    case FormIndexes.email:
      if (value === '') return 'email is required';
      if (value.length < 3) return 'email must be at least 3 characters';
      if (!value.match(regexCheckEmail)) return 'email is invalid';
      return '';

    case FormIndexes.password:
      if (value === '') return 'password is required';
      if (value.length < 7) return 'password must be at least 7 characters';
      if (!RegExp(/[A-Z]/).test(value))
        return 'password must contain at least one uppercase letter';
      if (!RegExp(/[0-9]/).test(value))
        return 'password must contain at least one number';
      if (!RegExp(/[!@#$%^&*(.),?":{}|<>]/).test(value))
        return 'password must contain at least one special character';
      return '';

    default:
      return '';
  }
};

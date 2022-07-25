import { FormIndexes } from '../types';
import { FormField } from './initialState';

export const getFormField = (
  form: FormField[], // change to formField Type.
  fieldIndex: FormIndexes
) => {
  return form[fieldIndex];
};

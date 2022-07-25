import { FormIndexes } from '../types';
import { FormField } from './initialFormField';

export const getFormField = (form: FormField[], fieldIndex: FormIndexes) => {
  return form[fieldIndex];
};

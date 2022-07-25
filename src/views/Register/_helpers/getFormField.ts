import { FormIndexes } from '../types';
import { InitialFormState } from './initialState';

export const getFormField = (
  form: InitialFormState[],
  fieldIndex: FormIndexes
) => {
  return form[fieldIndex];
};

// formStateObect || formStateField

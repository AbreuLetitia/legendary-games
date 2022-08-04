import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './userManage/types';

export type ActionCreator<state, payload> = CaseReducer<
  state,
  PayloadAction<payload>
>;

export interface IStore {
  user: IUserState;
}

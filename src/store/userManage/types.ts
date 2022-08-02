import { ActionCreator } from '../types';

export interface IUserState {
  name: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
}

type UserActionCreator<payload> = ActionCreator<IUserState, payload>;

export type IUserActions = {
  addUser: UserActionCreator<IUserState>;
};

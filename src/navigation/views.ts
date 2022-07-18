import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { NAVIGATORS } from './constants';

export default [
  {
    component: Login,
    name: NAVIGATORS.LOGIN,
  },
  {
    component: Register,
    name: NAVIGATORS.REGISTER,
  },
];

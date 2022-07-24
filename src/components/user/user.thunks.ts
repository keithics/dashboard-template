import {postFetch, postSilentFetch} from 'request/request';
import {ForgotPasswordInterface, LoginInterface, LoginResponseInterface, RegisterInterface} from './user.interface';

export const register = async (values : RegisterInterface) => {
  return postFetch(`/users/register/`, values, 'Please check your email for confirmation');
};

export const login = async (values: LoginInterface): Promise<LoginResponseInterface> => {
  return postSilentFetch(`/users/login`, values);
};

export const forgot = async (values : ForgotPasswordInterface) => {
  return postSilentFetch(`/users/forgot/`, values);
};

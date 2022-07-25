export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface extends LoginInterface {
  repeatPassword: string;
}

export interface ForgotPasswordInterface {
  email: string;
}

export interface LoginResponseInterface {
  token: string;
}

export interface UserDataInterface {
  isLoggedIn: boolean;
  token: string;
}

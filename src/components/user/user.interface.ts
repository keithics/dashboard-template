export interface LoginInterface {
    email: string;
    password: string;
}


export interface RegisterInterface extends LoginInterface{
    repeatPassword: string;
}

export interface ForgotPasswordInterface{
    email: string;
}

export interface UserDataInterface {
    firstName?: string; // we don't have first name and last name for now
    lastName?: string;
    email: string;
    gravatar: string;
    isLoggedIn: boolean;
    roles: string[];
    isAdmin: boolean;
}

export interface UserInterface {
    user: UserDataInterface;
    token: string;
}

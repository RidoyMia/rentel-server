
export interface IUser {
    fullname: string;
    role: 'House_Owner' | 'House_Rente';
    password: string;
    email: string;
    phone: string;
}

export interface ILogin {
    email : string,
    password : string
}

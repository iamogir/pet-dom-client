import type {Country, UserGender} from "entities/user";


export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: Country;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;




}
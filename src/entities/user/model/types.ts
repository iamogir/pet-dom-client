import type {UserGender} from "shared/const";

export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    birthDate: Date;
    gender: UserGender;
    avatarUrl?: string;




}
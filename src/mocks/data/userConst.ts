import type {IUserDto} from "entities/user/model";

export const allUsers: IUserDto[] = [
    {
        id: '00',
        email: 'email@mail.dot',
        password: '***',
        firstName: 'Name',
        lastName: 'Familyname',
        phone: '12345678901',
        country: 'Russia',
        birthDate: new Date().toString(),
        gender: 'male',
        avatarUrl: 'https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/1/0/e/10e6c0a439e17280a6f3fa6ae059819af5517efd.png',
    },
    {
        id: '01',
        email: 'ooo@mppp.com',
        password: '123',
        firstName: 'Inda',
        lastName: 'Battle',
        phone: '01928374652',
        country: 'Israel',
        birthDate: new Date().toString(),
        gender: 'female',
        avatarUrl: 'https://www.pngplay.com/wp-content/uploads/12/Anime-Girl-Pfp-PNG-Background.png',
    },
    {
        id: '02',
        email: 'abc@abc.ru',
        password: '000',
        firstName: 'Lilo',
        lastName: 'Gilo',
        phone: '56473829103',
        country: 'Russia',
        birthDate: new Date().toString(),
        gender: 'male',
        avatarUrl: 'https://avatarfiles.alphacoders.com/161/thumb-1920-161887.png',
    }
];
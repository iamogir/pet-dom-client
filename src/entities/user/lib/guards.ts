import {userCountry, type UserCountry, userGender, type UserGender} from "entities/user/model";

export const assertUserCountry: (country: string) => void = (country: string): asserts country is UserCountry => {
    if (!userCountry.includes(country as UserCountry))
        throw new Error('invalid user country!!! ' + country)
}

export const assertUserGender: (gender: string) => void = (gender: string): asserts gender is UserGender => {
    if (!userGender.includes(gender as UserGender))
        throw new Error('invalid user gender!!! ' + gender)
}
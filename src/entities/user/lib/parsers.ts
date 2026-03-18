import {assertUserCountry, assertUserGender} from "entities/user/lib";
import type {UserCountry, UserGender} from "entities/user/model";

export const parseUserCountry = (country: string) => {
    assertUserCountry(country);
    return country as UserCountry;
}

export const parseUserGender = (gender: string) => {
    assertUserGender(gender);
    return gender as UserGender;
}
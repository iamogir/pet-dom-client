export const userGender = [ 'male', 'female', "other" ] as const;
export type UserGender = typeof userGender[number];

export const userCountry = [ 'Israel', 'Russia' ] as const;
export type UserCountry = typeof userCountry[number];
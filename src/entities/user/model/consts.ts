export const userGender = [ 'male', 'female', "other" ] as const;
export type UserGender = typeof userGender[number];

export const country = [ 'Israel', 'Russia' ] as const;
export type Country = typeof country[number];
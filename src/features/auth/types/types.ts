export interface IUserCurrent {
    id: string,
    email: string,
    name: string,
}

export interface IAuthContext {
    user: IUserCurrent | null,
    setUser: (user: IUserCurrent | null) => void,
    logout: () => void,
}
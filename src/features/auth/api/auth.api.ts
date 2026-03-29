export const login = async (email: string, password: string) => {
    return {
        token: 'fake-token',
        user: {
            id: '00',
            email,
            name: 'Lady Di'
        }
    }
}
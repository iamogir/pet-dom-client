export const login = async (data: { email: string, password: string }) => {
    return {
        token: 'fake-token',
        user: {
            id: '00',
            email: data.email,
            name: 'Lady Di'
        }
    }
}

export const register = async( data: { email: string, password: string, name: string }) => {
    await new Promise((res) => {setTimeout(res, 500)});

    return {
        token: 'fake-token',
        user: {
            id: '01',
            email: data.email,
            password: data.password,
            name: data.name,
        }
    }
}
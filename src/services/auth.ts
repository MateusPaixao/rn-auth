interface Response {
    token: string
    user: {
        name: string,
        email: string
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ttkh33jso292sius2332ohpksspojsopjsiojookski',
                user: {
                    name: 'Mateus',
                    email: 'mateus@email.com'
                }
            })
        }, 2000);
    })
}
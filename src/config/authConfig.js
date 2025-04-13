
export const msalConfig = {
    auth:{
        clientId: "24881317-f5a8-4f3b-a2a3-7f92ef96d2b4",
        authority:"https://login.microsoftonline.com/9514b25a-7da8-4dc4-860e-1e4a28a5cb1d",
        redirectUri:"http://localhost:5173/view",

    },
   
}

export const loginequest = {
    // open id is used to login user and retrive tokens, profile can be used to retrive user details
    scopes: ["openid", "profile", "User.Read"],
}
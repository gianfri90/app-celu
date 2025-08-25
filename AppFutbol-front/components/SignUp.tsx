import axios from "axios";

export async function SignIn(email:string,password: string) {
    try {
        const response = await axios.post(
            "http://10.0.2.2:3000/auth/login",
            { 
                email:email,
                password:password 
            },
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function SignUp(password: string, userName: string, email: string) {
    try {
        const response = await axios.post(
            "http://10.0.2.2:3000/auth/register",
            {
                name: userName,
                password: password,
                email: email,
            },
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

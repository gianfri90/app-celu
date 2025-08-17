import axios from "axios"


export async function SignIn(password){
    try{
        const response = await axios.post("http://192.168.0.66:8000/api/login",{
            password: password,
        },{
            withCredentials:true
        });
    }catch(error){
        console.log(error)
    }
}

export async function SignUp(password,userName,email){
    try{
        const response = await axios.post("http://192.168.0.66:8000/api/register", {
            userName: userName,
            password: password,
            email: email
    },{
        withCredentials:true
    },
    );
    } catch (error) {
        console.log(error);
    }
}
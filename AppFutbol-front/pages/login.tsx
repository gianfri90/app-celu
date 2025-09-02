import { useEffect, useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"


export default function Foo({setIsAuthenticated }: {setIsAuthenticated: (value: boolean) => void}) {
    const [state, setState] = useState(true)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [email,setEmail] = useState("");

    return (
        <>
            {state === true ? (
                <LoginForm
                    setIsAuthenticated={setIsAuthenticated}
                    email={email}
                    password={password}
                    setPassword={setPassword}
                    setState={setState}
                    setEmail={setEmail}
                    state={state}
                />
            ) : (
                <RegisterForm
                    userName={userName}
                    setUserName={setUserName}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    email={email}
                    setEmail={setEmail}
                    setState={setState}
                    state={state}
                />
            )}

        </>
    )
}
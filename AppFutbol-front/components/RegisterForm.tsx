import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { SignUp } from "./SignUp";

type props = {
    userName: string;
    password: string;
    state: boolean;
    confirmPassword: string;
    email: string;
    setUserName: (text: string) => void;
    setPassword: (text: string) => void;
    setConfirmPassword:(text: string) =>void;
    setEmail:(text: string) => void;
    setState: (value: boolean) => void;
};

function registerForm({ userName, password, email,confirmPassword,setUserName, setPassword,setConfirmPassword, setState, setEmail, state }: props) {

    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowCoinfirmPassword] = useState(true)


    function toggleShowPassword() {
        setShowPassword(!showPassword)
    }

    function toggleShowConfirmPassword() {
        setShowCoinfirmPassword(!showConfirmPassword)
    }

    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.heading}>Futbol App</Text>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={userName}
                    onChangeText={setUserName}
                />
                <View>
                    <Text>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="*********"
                        textContentType="password"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.showEye}>
                        <Icon name={showPassword ? 'eye-outline' : 'eye'} size={20} color="grey" />
                    </TouchableOpacity>
                    <Text> Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="*********"
                        textContentType="password"
                        value={confirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.showEye}>
                        <Icon name={showConfirmPassword ? 'eye-outline' : 'eye'} size={20} color="grey" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>  {if(confirmPassword == password) SignUp(password,userName,email)}}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
                <Text style={styles.forgotText} onPress={() => setState(!state)}>Iniciar Sesion</Text>
            </View>
        </View>
    )
}

export default registerForm

const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 290,
        height: 40,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 0.5,
        color: "black",
        backgroundColor: "white"
    },
    button: {
        width: 290,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#3498db', // vacío daba error
        justifyContent: "center", // importante para centrar verticalmente
        alignItems: "center"       // importante para centrar horizontalmente
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    login: {
        gap: 10
    },
    forgotText: {
        textAlign: "right",
        color: "#3498db"
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center"
    },
    showEye: {
        alignItems: "flex-end"
    }
})

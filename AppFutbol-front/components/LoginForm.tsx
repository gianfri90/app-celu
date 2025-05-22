import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { SignIn } from "./SignUp";

type props = {
    password: string;
    state: boolean;
    setPassword: (text: string) => void;
    setState: (value: boolean) => void;
};

function LoginForm({ password, setPassword, setState,state}: props) {
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.heading}>Futbol App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*********"
                    textContentType="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {SignIn(password)}}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
                <Text style={styles.forgotText} onPress={() => setState(!state)}>Regiistrarse</Text>
            </View>
        </View>
    )
}

export default LoginForm

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
    }
})
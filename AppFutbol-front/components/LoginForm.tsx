import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { SignIn } from "./SignUp";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type props = {
    password: string;
    email: string;
    state: boolean;
    setEmail: (text: string) => void;
    setPassword: (text: string) => void;
    setState: (value: boolean) => void;
    setIsAuthenticated: (value: boolean) => void;
};

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};


type RegisterScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Login"
>;

function LoginForm({ password, email, setPassword, setEmail, setState, state,setIsAuthenticated  }: props) {

    const navigation = useNavigation<RegisterScreenNavigationProp>();

    async function handleSubmit() {
        const response = await SignIn(email,password);
        
        if (response && response.token) {
            await AsyncStorage.setItem("authToken", response.token);
            console.log("xxx")
            setIsAuthenticated(true);
            navigation.replace("Home");
        } else {
            Alert.alert("Error", "No se pudo registrar el usuario");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.heading}>Futbol App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ejemplo@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                />
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
                <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
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
        backgroundColor: '#3498db',
        justifyContent: "center",
        alignItems: "center"
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
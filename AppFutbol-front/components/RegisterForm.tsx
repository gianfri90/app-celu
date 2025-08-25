import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { SignUp } from "./SignUp";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  state: boolean;
  setUserName: (text: string) => void;
  setPassword: (text: string) => void;
  setConfirmPassword: (text: string) => void;
  setEmail: (text: string) => void;
  setState: (value: boolean) => void;
};


export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};


type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

function RegisterForm({userName,password,email,confirmPassword,setUserName,setPassword,setConfirmPassword,setEmail,state,setState,}: Props) {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  async function handleSubmit() {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const response = await SignUp(password, userName, email);
    if (response) {
      AsyncStorage.setItem("authToken", JSON.stringify(response));
      navigation.replace("Home");
    } else {
      Alert.alert("Error", "No se pudo registrar el usuario");
    }
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

        <Text>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="*********"
            value={password}
            secureTextEntry={showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showEye}
          >
            <Icon
              name={showPassword ? "eye-outline" : "eye"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <Text>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="*********"
            value={confirmPassword}
            secureTextEntry={showConfirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.showEye}
          >
            <Icon
              name={showConfirmPassword ? "eye-outline" : "eye"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.forgotText} onPress={() => setState(!state)}>
          Iniciar Sesion
        </Text>
      </View>
    </View>
  );
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    gap: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    width: 290,
    height: 40,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    color: "black",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputPassword: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    color: "black",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  showEye: {
    paddingHorizontal: 10,
  },
  button: {
    width: 290,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotText: {
    textAlign: "right",
    color: "#3498db",
    marginTop: 10,
  },
});

import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image
} from "react-native";

function Profile({setIsAuthenticated}) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("authToken");
            setToken(storedToken);
        };

        fetchToken();
    }, []);

    // Manejar la eliminación del token
    const handleRemoveToken = async () => {
        await AsyncStorage.removeItem("authToken");
        setToken(null); 
        setIsAuthenticated(false)
    };

    console.log(token)

    return (
        <View style={styles.container}>
            <Text onPress={handleRemoveToken}>Eliminar Token</Text>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row", gap: 10 }}>
                <Image style={{ width: 200, height: 200 }} source={require('../img/WhatsApp Image 2025-03-02 at 15.09.03.jpeg')} />
                <View>
                    <TextInput style={styles.dataProfile} editable={false} value={token || ''} />
                    <TextInput style={styles.dataProfile} editable={false} value="Apellido" />
                </View>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 15,
        alignItems: "center",
    },
    dataProfile: {
        borderColor: "black",
        borderWidth: 0.5,
        padding: 10,
        width: 150,
        marginVertical: 5,
        borderRadius: 5
    }
});

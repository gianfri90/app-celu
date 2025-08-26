import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

export default function Home() {
    const [token, setToken] = useState(null);
    const [state,setState] = useState(0);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const value = await AsyncStorage.getItem("authToken");
                if (value !== null) {
                    setToken(value);
                }
            } catch (e) {
                console.log("Error leyendo token:", e);
            }
        };

        loadToken();
    }, []);

    return (
        <>
            {state === 1 && (
                <Text>ggg</Text>
            )}
            <View style={styles.bar}>
                <TouchableOpacity onPress={() => setState(1)}>
                    <Icon name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setState(2)}>
                    <Icon name="account-group" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setState(3)}>
                    <Icon name="account" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bar: {
        position: "absolute",
        bottom:0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

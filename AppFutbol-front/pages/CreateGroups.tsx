import axios from "axios";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function handleSubmit(name: string, maxIntegrantes: number) {
    try {
        const token = await AsyncStorage.getItem("authToken");

        const response = await axios.post(
            "http://10.0.2.2:3000/groups",
            {
                name,
                maxIntegrantes,
            },
             {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        alert("Grupo creado exitosamente")
    } catch (error) {
        alert("No fue posible crear el grupo")
    }
}

function Profile() {
    const [name, setName] = useState("");
    const [maxIntegrantes, setMaxIntegrantes] = useState("");

    return (
        <View style={{ gap: 70 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Crear grupos</Text>
                <Text>Aqui puedes crear nuevos grupos.</Text>
            </View>
            <View style={{ top: 20, gap: 10, alignItems: "center" }}>
                <Text>Nombre del grupo:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text>Total de jugadores:</Text>
                <TextInput
                    style={styles.input}
                    value={maxIntegrantes}
                    keyboardType="numeric"
                    onChangeText={setMaxIntegrantes}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => handleSubmit(name, parseInt(maxIntegrantes))}
                >
                    <Text style={{ color: "#fff" }}>Crear grupo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1 / 3,
        alignItems: "center",
        top: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 10,
        width: 200,
    },
    btn: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 4,
        width: 120,
        alignItems: "center",
    },
});

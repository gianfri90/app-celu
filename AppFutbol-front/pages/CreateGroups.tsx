import axios from "axios";
import React from "react";
import { View, StyleSheet,Text,TextInput,TouchableOpacity } from "react-native";

async function handleSubmit(){
    console.log("submit");
    axios.post("http://10.0.2.2:3000/groups",{
        name:"Grupo de prueba",
        maxIntegrantes:10
    },{
        withCredentials:true
    }).then((response) => {
        console.log("ss");
    }).catch((error) => {
        console.error("gg");
    });
}

function Profile() {
    return (
        <View style={{gap:70}}>
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Crear grupos</Text>
                <Text>Aqui puedes crear nuevos grupos.</Text>
            </View>
            <View style={{top:20,gap:10,alignItems:"center"}}>
                <Text>Nombre del grupo:</Text>
                <TextInput style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 10, width: 200}}/>
                <Text>Total de jugadores:</Text>
                <TextInput style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 10, width: 200}}/>
                <TouchableOpacity style={{backgroundColor: '#007bff', padding: 10, borderRadius: 4, width: 100}} onPress={() => {handleSubmit()}}>
                    <Text style={{color: '#fff'}}>Crear grupo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1/3,
        alignItems: "center",
        top: 20,
    },
});

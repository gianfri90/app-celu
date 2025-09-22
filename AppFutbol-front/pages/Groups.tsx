import axios from "axios";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type gruoup {
    
}

function Groups(){

    const [grupos,setGrupos] = useState<>()

    useEffect(() => {
        const token = AsyncStorage.getItem("authToken");
    
         groups = axios.get('http://10.0.2.2:3000/groups',{
            headers: { Authorization: `Bearer ${token}` },
        })

    },[])


    return(
        <>
            <View style={{marginTop:30}}>
                <View style={{}}>
                    <Text>ss</Text>
                </View>
            </View>
        </>
    )
}

export default Groups

const styles = StyleSheet.create({

})
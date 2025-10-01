import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    FlatList,
    Pressable,
    Text,
    View,
    StyleSheet,
    Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

type Group = {
    grupoId: number;
    grupo: {
        name: string;
    };
};

type Props = {
    handleGroupPress: (grupoId: number) => void;
};

function MyGroups({ handleGroupPress }: Props) {

    const [grupos, setGrupos] = useState<Group[]>([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");
                if (!token) return;

                const response = await axios.get("http://10.0.2.2:3000/group-members/groups", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setGrupos(response.data);
            } catch (error) {
                console.error("Error fetching groups:", error);
            }
        };
        fetchGroups();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tus Grupos</Text>
            {grupos.map((item) => (
                <View key={item.grupoId}>
                    <Pressable
                        onPress={() => handleGroupPress(item.grupoId)}
                        style={styles.groupItem}
                    >
                        <Text style={styles.groupText}>{item.grupo.name}</Text>

                    </Pressable>
                </View>
            ))}
        </View>
    );
}

export default MyGroups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        marginTop: 30,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    groupItem: {
        width: (SCREEN_WIDTH - 32) / 2,
        height: 120,
        margin: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
    },
    groupText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    groupSubText: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
        marginTop: 4,
    },
});

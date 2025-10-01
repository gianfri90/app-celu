import { useEffect, useState } from "react";
import axios from "axios";
import { Pressable, Text, View,StyleSheet,Dimensions } from "react-native";

type Props = {
  IdGroup: number;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

type personas = {
  user: {
    name: string
  }
}

export default function InfoGroup({ IdGroup }: Props) {
  const [data, setData] = useState<personas[]>(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3000/group-members/members/${IdGroup}`);
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener grupo:", error);
      }
    };

    fetchGroupInfo();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Tus Grupos</Text>
        {data?.map((item) => (
          <View key={item.user.name}>
            <Pressable
              //onPress={() => handleGroupPress(item.grupoId)}
              style={styles.groupItem}
            >
              <Text style={styles.groupText}>{item.user.name}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </>
  );
}

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

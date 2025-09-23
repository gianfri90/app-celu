import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  IdGroup: number;
};

export default function InfoGroup({ IdGroup }: Props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3000/group-members/members/${IdGroup}`);
        console.log("Grupo info:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener grupo:", error);
      }
    };

    fetchGroupInfo();
  }, [IdGroup]);

  return (
    <>
    </>
  );
}

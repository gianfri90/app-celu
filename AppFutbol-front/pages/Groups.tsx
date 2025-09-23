import { useEffect, useState } from "react";
import MyGroups from "../components/MyGroups";
import InfoGroup from "../components/InfroGroup";

function Groups() {
  const [state, setState] = useState(0);

  const handleGroupPress = (grupoId: number) => {
    console.log("Grupo seleccionado:", grupoId);
    setState(1);
  };

  return (
    <>
      {state === 0 && (
        <MyGroups handleGroupPress={handleGroupPress} />
      )}
      {state === 1 && (
        <InfoGroup IdGroup={1}/>
      )}
    </>
  );
}

export default Groups;

import { useMonsterprepContext } from "./useMonsterprepContext";

export const useGetMonsterLists = () => {
  const { dispatch } = useMonsterprepContext();

  const getMonsterLists = async () => {
    const response = await fetch("https://monsterprep.onrender.com/monster/");
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_MONSTERLISTS", payload: json });
      console.log(json)
    }
  };

  return getMonsterLists;
};

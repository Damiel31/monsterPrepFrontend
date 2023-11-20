import { useState } from "react";

export const useGetMonsters = () => {
  const [monstersName, setMonstersName] = useState();
  const getMonsters = async () => {
    const response = await fetch("https://mhw-db.com/monsters");
    const json = await response.json();

    if (response.ok) {
      setMonstersName(json);
    }
  };

  return { getMonsters, monstersName };
};

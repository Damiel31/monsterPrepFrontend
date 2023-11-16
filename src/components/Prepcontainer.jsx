/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useGetMonsterLists } from "../hooks/useGetMonsterLists";
import { useMonsterprepContext } from "../hooks/useMonsterprepContext";
import Preplists from "./Preplists";
import PrepButton from "./PrepButton";

export default function Prepcontainer() {
  const { monsterLists } = useMonsterprepContext();
  const getMonsterLists = useGetMonsterLists();

  useEffect(() => {
    getMonsterLists();
  }, []);

  return (
    <div className="bg-white p-12 rounded-lg w-[470px] mt-14 mx-auto flex flex-col">
      {monsterLists &&
        monsterLists.map((monsterList) => (
          <Preplists key={monsterList._id} monsterList={monsterList} />
        ))}
      <PrepButton />
    </div>
  );
}

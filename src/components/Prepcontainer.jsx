/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useGetMonsterLists } from "../hooks/useGetMonsterLists";
import { useMonsterprepContext } from "../hooks/useMonsterprepContext";
import Preplists from "./Preplists";
import PrepButton from "./PrepButton";
import { useGetMonsters } from "../hooks/useGetMonsters";

export default function Prepcontainer() {
  const { monsterLists } = useMonsterprepContext();

  const getMonsterLists = useGetMonsterLists();

  useEffect(() => {
    getMonsterLists();
  }, []);

  return (
    <div className="bg-white p-12 rounded-lg w-[470px] mt-14 mx-auto flex flex-col">
      {monsterLists ? (
        monsterLists.map((monsterList) => (
          <Preplists key={monsterList._id} monsterList={monsterList} />
        ))
      ) : (
        <h2 className="text-lg font-semibold text-primary-color text-center">
          Loading...
        </h2>
      )}
      <PrepButton />
    </div>
  );
}

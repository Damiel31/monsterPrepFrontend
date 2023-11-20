/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from "react";
import { useGetMonsterLists } from "./hooks/useGetMonsterLists";
import Prepcontainer from "./components/Prepcontainer";
import { useMonsterprepContext } from "./hooks/useMonsterprepContext";
import PrepForm from "./components/PrepForm";

function App() {
  const getMonsterLists = useGetMonsterLists();
  const { prepForm } = useMonsterprepContext();
  useEffect(() => {
    getMonsterLists();
  }, []);

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold text-white text-center">
        Monster Prep
      </h1>
      {!prepForm ? <Prepcontainer /> : <PrepForm />}
    </div>
  );
}

export default App;

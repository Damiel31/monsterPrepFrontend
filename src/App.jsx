/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars

import { useEffect } from "react";
import { useGetMonsterLists } from "./hooks/useGetMonsterLists";
import Prepcontainer from "./components/Prepcontainer";

function App() {
  const getMonsterLists = useGetMonsterLists();

  useEffect(() => {
    getMonsterLists();
  }, []);

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold text-white text-center">
        Monster Prep
      </h1>
      <Prepcontainer />
    </div>
  );
}

export default App;

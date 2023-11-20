import { useMonsterprepContext } from "../hooks/useMonsterprepContext";

export default function PrepButton() {
  let { monsterLists, dispatch } = useMonsterprepContext();

  const addHunt = () => {
    dispatch({ type: "CHANGE_FORM", payload: true });
  };
  return (
    <div className="mt-24">
      <button
        type="button"
        className={` bg-ocean-blue text-white text-lg font-medium p-3.5 rounded-md w-full mb-6 hover:bg-blue-600 ${
          monsterLists ? "" : " hover:cursor-not-allowed"
        }`}
        onClick={addHunt}
        disabled={monsterLists ? false : true}
      >
        Add Hunt
      </button>
      <button
        type="button"
        className={`bg-transparent text-secondary-color text-lg font-medium p-3.5 rounded-md w-full hover:bg-slate-200 ${
          monsterLists ? "" : " hover:cursor-not-allowed"
        }`}
        disabled={monsterLists ? false : true}
      >
        Clear All
      </button>
    </div>
  );
}

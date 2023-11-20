import { useState } from "react";

export const useGetItems = () => {
  const [items, setItems] = useState();

  const getItems = async () => {
    const response = await fetch("https://mhw-db.com/items");
    const json = await response.json();

    if(response.ok){
        setItems(json)
    }
  };

  return {getItems, items};
};

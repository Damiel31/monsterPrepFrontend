/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetItems } from "../hooks/useGetItems";
import { useGetMonsters } from "../hooks/useGetMonsters";
import weapons from "../data/weapons";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";

export default function PrepForm() {
  const [weakness, setWeakness] = useState("");
  const [weapon, setWeapon] = useState("");

  const [goalRewards, setGoalRewards] = useState([]);
  const [inventory, setInventory] = useState([]);

  const [selectGoalReward, setSelectGoalReward] = useState(true);
  const [selectItem, setSelectItem] = useState(true);

  const [selectedGoalRewards, setSelectedGoalRewards] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const { getMonsters, monstersName } = useGetMonsters();
  const { getItems, items } = useGetItems();

  const monsterInfo = (e) => {
    monsterRewardDrop(e);
    monsterWeakness(e);
  };

  const monsterWeakness = (e) => {
    const selectedMonster = e.target.value;
    const result = monstersName.find(
      (monster) => monster.name === selectedMonster
    );

    if (result) {
      setWeakness(result.weaknesses[0].element);
    } else {
      setWeakness(weakness);
    }
  };

  const monsterRewardDrop = (e) => {
    const selectedMonster = e.target.value;
    const result = monstersName.find(
      (monster) => monster.name === selectedMonster
    );

    if (result) {
      setGoalRewards(result.rewards);
    }
  };

  const pushRewardGoal = (e) => {
    let rewardName = e.target.value;
    if (e.target.value !== "") {
      if (
        selectedGoalRewards.find((reward) => reward.itemName === e.target.value)
      ) {
        setSelectedGoalRewards(
          selectedGoalRewards.map((rewards) => {
            if (rewards.itemName === e.target.value) {
              return {
                ...rewards,
                itemQuantity: rewards.itemQuantity + 1,
              };
            }
          })
        );
      } else {
        setSelectedGoalRewards((current) => [
          ...current,
          { itemName: rewardName, itemQuantity: 1 },
        ]);
        setSelectGoalReward(!selectGoalReward);
      }
    }
  };

  useEffect(() => {
    getMonsters();
    getItems();
  }, []);

  return (
    <div className="flex justify-between mt-16">
      <div className="picture w-2/5">
        <h2 className="text-white text-center">Fetch Picture here</h2>
      </div>
      <div className="bg-white p-12 rounded-lg w-[470px]  mx-auto flex flex-col ">
        <select
          className="capitalize p-3 border rounded-md border-ashe-gray mb-8 monsterNamesDropdown"
          onChange={monsterInfo}
        >
          <option value="" defaultValue={""}>
            Monster Name
          </option>
          {monstersName &&
            monstersName.map((monster) => {
              return (
                <option value={monster.name} key={monster.id}>
                  {monster.name}
                </option>
              );
            })}
          <option hidden={monstersName ? true : false} disabled>
            Loading Monster Names...
          </option>
        </select>
        <input
          type="text"
          disabled
          className="capitalize p-3 border rounded-md border-ashe-gray mb-8"
          placeholder={`Weakness: ${weakness}`}
        />
        <select
          className="capitalize p-3 border rounded-md border-ashe-gray mb-8 monsterNamesDropdown"
          onChange={(e) => setWeapon(e.target.value)}
        >
          <option value="" defaultValue={""}>
            Weapons
          </option>
          {weapons &&
            weapons.map((weapon) => {
              return (
                <option value={weapon.name} key={weapon.id}>
                  {weapon.name}
                </option>
              );
            })}
        </select>
        <div className="mb-6">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-primary-color mb-2.5">
              Reward Goals
            </h2>
            {selectedGoalRewards.length === 0 ? (
              <></>
            ) : (
              <div className="flex flex-col">
                {selectedGoalRewards.map((reward, index) => {
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <p className="text-lg text-secondary-color capitalize">
                          {`${reward.itemName} (${reward.itemQuantity}x)`}
                        </p>

                        <div className="flex flex-col">
                          <FaArrowAltCircleUp
                            className="mb-4 cursor-pointer"
                            size={15}
                            color="#111928"
                            onClick={() => {
                              setSelectedGoalRewards(
                                selectedGoalRewards.map((rewards) => {
                                  if (rewards.itemName === reward.itemName) {
                                    return {
                                      ...rewards,
                                      itemQuantity: rewards.itemQuantity + 1,
                                    };
                                  }
                                })
                              );
                            }}
                          />
                          <FaArrowCircleDown
                            className="mb-4 cursor-pointer"
                            size={15}
                            color="#111928"
                            onClick={() => {
                              setSelectedGoalRewards(
                                selectedGoalRewards.map((rewards) => {
                                  if (rewards.itemName === reward.itemName) {
                                    return {
                                      ...rewards,
                                      itemQuantity:
                                        rewards.itemQuantity === 0
                                          ? setSelectGoalReward(selectedGoalRewards.filter((goalReward)=> goalReward.itemName !== reward.itemName))
                                          : rewards.itemQuantity - 1,
                                    };
                                  }
                                })
                              );
                            }}
                          />
                        </div>
                      </div>
                      <hr className="mb-2.5" />
                    </div>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              className="text-ocean-blue text-sm font-semibold hover:text-blue-600 text-left"
              onClick={() => {
                setSelectGoalReward(!selectGoalReward);
              }}
            >
              {selectGoalReward
                ? `add${!goalRewards ? "more" : " "}reward ${
                    !goalRewards ? "goals" : "goal"
                  }`
                : "cancel"}
            </button>
            <select
              className="capitalize p-3 border rounded-md border-ashe-gray monsterNamesDropdown"
              onChange={pushRewardGoal}
              hidden={selectGoalReward}
            >
              <option value="" defaultValue={""}>
                Add Reward Goal
              </option>
              {goalRewards &&
                goalRewards.map((reward) => {
                  return (
                    <option value={reward.item.name} key={reward.id}>
                      {reward.item.name}
                    </option>
                  );
                })}
              <option hidden={goalRewards.length === 0 ? false : true} disabled>
                No Reward Drops
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-primary-color mb-2.5">
              Inventory
            </h2>
            <button
              type="button"
              className="text-ocean-blue text-sm font-semibold hover:text-blue-600 text-left"
              onClick={() => setSelectItem(!selectItem)}
            >
              {selectItem
                ? `add${!inventory ? "more" : " "}${
                    !goalRewards ? "items" : "item"
                  }`
                : "cancel"}
            </button>
            <select
              className="capitalize p-3 border rounded-md border-ashe-gray monsterNamesDropdown"
              onChange={monsterInfo}
              hidden={selectItem}
            >
              <option value="" defaultValue={""}>
                Monster Name
              </option>
              {monstersName &&
                monstersName.map((monster) => {
                  return (
                    <option value={monster.name} key={monster.id}>
                      {monster.name}
                    </option>
                  );
                })}
              <option hidden={monstersName ? true : false} disabled>
                Loading Monster Names...
              </option>
            </select>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
}

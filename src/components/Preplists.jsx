/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { format, parseISO } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Preplists({ monsterList }) {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div className="">
        <h2
          className={`text-lg font-semibold text-primary-color mb-2.5 ${
            monsterList.status ? "" : "line-through"
          }`}
        >
          {monsterList.monsterName}
        </h2>
        <p
          className={`text-lg text-secondary-color mb-2.5 ${
            monsterList.status ? "" : "line-through"
          }`}
        >
          {format(parseISO(monsterList.createdAt), "HH:mm")} -{" "}
          {format(new Date(monsterList.createdAt), "MM/dd/yyyy")}
        </p>
        <p
          className={`text-xs ${
            monsterList.status ? "text-ocean-blue" : " text-field-green"
          } font-semibold`}
        >
          {monsterList.status ? "In progresss..." : "Done"}
        </p>
      </div>
      <div className="flex items-center">
        <FaEdit className="mr-4 cursor-pointer" size={20} color="#111928" />
        <MdDeleteForever className="cursor-pointer" size={20} color="#111928" />
      </div>
    </div>
  );
}

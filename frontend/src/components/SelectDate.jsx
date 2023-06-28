import { useEffect, useState } from "react";

const SelectDate = ({ selectDate }) => {
  const [date, setDate] = useState("");
  const handleDateChange = (date) => {
    setDate(date);
  };
  useEffect(() => {
    selectDate(date);
  });

  return (
    <section className="bg-[#F9F9F9] border-2 border-[#EBEBEB] absolute top-9 rounded-lg z-10 right-0 w-[140px] h-[120px]">
      <ul className="w-full h-full text-lg font-medium flex flex-col justify-start items-end overflow-y-scroll p-2">
        <li
          onClick={() => {
            handleDateChange("Today", "green-500");
          }}
          className="text-green-500 p-1 bg-green-500 rounded-lg mb-1 bg-opacity-50 w-full text-center"
        >
          Today
        </li>
        <li
          onClick={() => {
            handleDateChange("Tommorow", "orange-500");
          }}
          className="text-orange-500 p-1 bg-orange-500 rounded-lg mb-1 bg-opacity-50 w-full text-center"
        >
          Tommorow
        </li>
        <li
          onClick={() => {
            handleDateChange("Weekend", "yellow-500");
          }}
          className="text-yellow-500 p-1 bg-yellow-500 rounded-lg mb-1 bg-opacity-50 w-full text-center"
        >
          Weekend
        </li>
        <li
          onClick={() => {
            handleDateChange("Every Day", "purple-500");
          }}
          className="text-purple-500 p-1 bg-purple-500 rounded-lg mb-1 bg-opacity-50 w-full text-center"
        >
          Every Day
        </li>
        <li
          onClick={() => {
            handleDateChange("Every Week Day", "blue-500");
          }}
          className="text-blue-500 p-1 bg-blue-500 rounded-lg mb-1 bg-opacity-50 w-full text-center"
        >
          Every Week Day
        </li>
      </ul>
    </section>
  );
};

export default SelectDate;

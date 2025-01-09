import React from "react";

const SuggestionCard = () => {
  const sugg = [
    {
      start: "1",
      end: "12",
      time:40,
      diff:"Easy"
    },
    {
      start: "12",
      end: "32",
      time:90,
      diff:"Medium"
    },
    {
      start: "32",
      end: "40",
      time:180,
      diff:"Hard"
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-around">
      {sugg.map((item, index) => {
        return (
          <div key={index} className="text-[9px] flex flex-col gap-2  my-1 rounded-md">
            <p className="bg-[#565aa6] px-1 text-white flex">
              <p>Q. </p>
              {item.start}
              <p>-</p>
              {item.end}
            </p>

            <div className="border-4 rounded-lg  bg-[#f3f2f8] border-dotted border-[#e5e3ed]">
              <p className="px-2 py-3 text-[12px] font-semibold">
                {item.time <= 60 ? `${item.time}sec` : `${item.time / 60}min`}
              </p>
            </div>

            <p
              className={`text-center text-[12px] ${
                item.diff === "Easy"
                  ? "text-green-500"
                  : item.diff === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {item.diff}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionCard;

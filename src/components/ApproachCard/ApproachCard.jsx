import React from 'react'

const ApproachCard = () => {
    const appData = [
      {
        percent: "25",
        data: "Facts",
      },
      {
        percent: "32",
        data: "Analysis",
      },
      {
        percent: "19",
        data: "Elimination",
      },
      {
        percent: "24",
        data: "Guess",
      }
    ];
  return (
    <div className='flex flex-col'>
          {appData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-[14px] flex gap-2 border border-[#e5e3ed] my-1"
                >
                  <p className="bg-[#dfe0f5] px-1 text-[#706da7]">
                    {item.percent}
                    <span className="text-[8px]">%</span>
                  </p>

                  <p>
                    Based on <span className="text-[#706da7]">{item.data}</span>
                  </p>
                </div>
              );
      })}
    </div>
  )
}

export default ApproachCard

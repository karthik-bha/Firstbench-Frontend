import React from 'react'
import assets from '../../assets/assets';
import ApproachCard from '../ApproachCard/ApproachCard';
import SuggestionCard from '../SuggestionCard/SuggestionCard';

const MiddleRightContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {/* card 1  */}
      <div className="border border-slate-200 shadow-sm p-2 rounded-md">
        <div className="flex gap-1 flex-wrap">
          <img src={assets.navgraph} width={20} />
          <h2 className="text-slate-400">Improvements</h2>
        </div>
        <p className="text-[14px] my-3">Subject Understanding</p>
        <ul className="flex gap-1 flex-wrap text-[10px] text-white">
          <li className="px-2  bg-[#15bcb4] rounded-lg">Geography</li>
          <li className="px-2 bg-[#e4b507] rounded-lg ">Politics</li>
          <li className="px-2 bg-[#15bcb4] rounded-lg ">Current Affairs</li>
          <li className="px-2 bg-[#b81e1c] rounded-lg">General Studies</li>
          <li className="px-2  bg-[#15bcb4] rounded-lg">Mathematics</li>
          <li className="px-2 bg-[#c8ccd0] rounded-lg">Social Studies</li>
          <li className="px-2 bg-[#b81e1c] rounded-lg">English Literature</li>
          <li className="px-2 bg-[#e4b507] rounded-lg">Indian History</li>
          <li className="px-2  bg-[#15bcb4] rounded-lg">Economics</li>
        </ul>
      </div>

      {/* card 2 */}

      <div className="border border-slate-200 shadow-sm p-2 rounded-md">
        <div className="flex gap-1">
          <img src={assets.clock} width={20} />
          <h2 className="text-slate-400">Response Time </h2>
        </div>
        <div className="flex  ">
          <p className="text-[10px] my-3 text-white px-1 bg-[#5d5fb6]">
            Std Time - 2min
          </p>
        </div>
        <div className="border-2 border-dotted border-[#dbd9e2] bg-[#f0f0f9] flex justify-between m items-end px-2">
          <div>
            <p className="text-[12px] text-slate-400">
              <span className="text-[#47b4aa] font-semibold text-[18px]">
                60 <span className="text-slate-400">%</span>
              </span>
              Ans took
            </p>
          </div>
          <div className="flex gap-1 flex-wrap items-end">
            <img src={assets.redarrowup} />
            <p className="text-[14px] text-[#8683b6]">
              <span>2</span>min
            </p>
          </div>
        </div>
        <hr className="my-3 h-[1px] bg-black border-none " />
        <p className="font-semibold text-center">
          You are <span className="text-red-500">slow</span> !
        </p>
      </div>

      {/* card 3  */}
      <div className="border border-slate-200 shadow-sm p-2 flex flex-col rounded-md">
        <div className='flex gap-1'>
          <img src={assets.navgraph} width={20} />
          <h2 className="text-slate-400">Approach Data </h2>
        </div>
        <ApproachCard />
          </div>
          
      {/* card 4  */}
      <div className="border border-slate-200 shadow-sm p-2 rounded-md">
        <div className="flex gap-1">
          <img src={assets.sparkle} width={20} />
          <h2 className="text-slate-400">Suggestions</h2>
        </div>
        <SuggestionCard />
      </div>
    </div>
  );
}

export default MiddleRightContainer

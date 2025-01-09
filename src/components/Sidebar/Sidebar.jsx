import React from "react";
import assets from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className=" w-auto sm:mx-auto md:mx-0  mt-6 rounded-md bg-gradient-to-b from-[#f7f6fb] via-[#f7f6fd] to-[#f7f6fd] border border-slate-200">
      <div className="justify-center items-center flex flex-col mx-2 text-center ">
        <img src={assets.sidebarimg} alt="sidebarimg" className="mt-4" />
        <div>
          <h2 className="text-[#6d69bb] text-[24px] font-semibold">
            Your Result!
          </h2>
          <p className="font-light text-[14px]">
            All your insights & details in one place
          </p>
        </div>

        <div className="p-4  bg-white rounded-lg mt-6  border border-slate-200">
          {/* cont 1 */}
          <div className="flex gap-1 items-center p-2  justify-center bg-[#f7f6fd] rounded-md">
            <img src={assets.sidebartick} />
            <div className="mr-4">
              <p className="bg-[#5b62b8] px-1 text-[6px] lg:text-[7px] text-white rounded-md">
                YOU'VE PASSED
              </p>
              <p className="text-[18px]">
                <b>136</b>
                <span className="text-[14px] text-slate-400">/240</span>
              </p>
            </div>
            <div className="h-8 w-[1px] bg-slate-400"></div>
            <div className="flex flex-col text-[9px] ">
              <div className="flex  justify-center">
                <p className=" bg-[#0a9f93] text-white text-[10px] rounded-sm px-2 ">
                  76%
                </p>
              </div>
              <p className="text-[#0a9f93]">ACCURACY</p>
            </div>
          </div>

          {/* cont 2 */}
          <div className="flex flex-col gap-1  p-2  mt-2 text-left bg-[#f7f6fd] rounded-md">
            <div className="flex gap-1 items-center">
              <img
                src={assets.sidebarpfp}
                className="border-2 border-[#decfdc] w-[35px] h-[35px]"
              />
              <div>
                <p className="text-[#918cb9] text-[12px]">Top Score</p>
                <p className="text-[18px]">
                  <b>230</b>
                  <span className="text-[14px] text-slate-400">/240</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between text-[9px]">
              <p>
                By <span className="font-bold ">Parth Akotkar</span>
              </p>
              <p className=" bg-[#0a9f93] text-white px-2 rounded-md">
                92% ACCURACY
              </p>
            </div>
          </div>

          <div className="text-left mt-2">
            <p className="text-[14px] font-semibold">Improve your Marks</p>
            <p className="text-[10px] text-slate-500">
              Improve your score by practicing more.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-[#595fb9] text-white w-full py-1 rounded-md text-[14px] font-light">
              Practice more
            </button>
          </div>
        </div>

         {/* last main container  */}

        <div className="p-4 my-4 bg-white  max-w-[220px] md:max-w-[230px] rounded-lg mt-6 border border-slate-200">
          <div className="flex flex-col gap-1 rounded-md mx-auto">
            <h2 className="text-[18px] font-bold">Revisit Paper</h2>
            <p className="text-[12px] font-light">
              Challenge your friends by simply sharing a link to this test
            </p>
            <div className="py-4 items-center mx-auto">
              <button className="bg-[#595fb9] text-white py-1 px-6 rounded-md text-[14px] font-light flex gap-2">
                <img src={assets.arrowfile} width={15} />
                Visit
              </button>
            </div>
            <p className="flex gap-1 text-[10px] text-slate-400">
             
              <img src={assets.exclamation} width={15} />
              Instructions on how to upload your handwritten material is given
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

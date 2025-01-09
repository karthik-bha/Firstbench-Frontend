import React from 'react'
import assets from '../../assets/assets';

const BottomRightContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* container 1  */}
      <div className="border-2 border-slate-100 rounded-lg justify-center items-center">
        <div className="flex gap-1 m-2 ">
          <img src={assets.compare} width={20} />
          <h2 className="text-slate-400">Compare Accuracy </h2>
        </div>
        <div className="flex mx-auto justify-center">
          <img src={assets.bottomrightimg1} />
        </div>
      </div>

      {/* container 2  */}
      <div className="border-2 border-slate-100 rounded-lg">
        <div className="flex gap-1 my-2 mx-4 ">
          <img src={assets.monitorexclamation} width={20} />
          <h2 className="text-slate-400">Time Taken </h2>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center text-[12px] text-slate-400">
          <img src={assets.scale1} width={350} />
          <p className='mb-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img src={assets.scale2} width={350} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomRightContainer

import React from 'react'
import assets from '../../assets/assets';

const TopRightCards = () => {
    const cardContent = [
      { title: "Compare Accuracy" },
      { title: "Compare Accuracy" },
      { title: "Compare Accuracy" },
    ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 '>
          {cardContent.map((item, index)=>{
              return (
                <div key={index} className=" border border-slate-200 rounded-lg h-[25vh] shadow-sm">
                  <div className='flex gap-1 m-2'>
                          <img src={assets.downarrowbox} width={13} />
                    <h2 className='text-gray-400'>{item.title}</h2>
                  </div>
                </div>
              );
      })}
    </div>
  )
}

export default TopRightCards

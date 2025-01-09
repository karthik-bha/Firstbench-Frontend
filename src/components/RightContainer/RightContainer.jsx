import React from 'react'
import TopRightContainer from '../TopRightContainer/TopRightContainer'
import MiddleRightContainer from '../MiddleRightContainer/MiddleRightContainer';
import BottomRightContainer from '../BottomRightContainer/BottomRightContainer';

const RightContainer = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <TopRightContainer />
      <div className='my-6'>
        <MiddleRightContainer />
      </div>
      <BottomRightContainer/>
    </div>
  );
}

export default RightContainer

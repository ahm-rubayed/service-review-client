import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Review from '../Review/Review';
import RigthSidebar from '../RightSidebar/RigthSidebar';

const ServiceDetails = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center max-w-screen-lg mx-auto my-28'>
      <LeftSidebar></LeftSidebar>
      <Review></Review>
      <RigthSidebar></RigthSidebar>
    </div>
  );
};

export default ServiceDetails;
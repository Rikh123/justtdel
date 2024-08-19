import React from 'react';
import MainCrosel from '../../components/HomeCarosel/MainCrosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { women_dress } from '../../../Data/women dress'; // Ensure the path is correct

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex-col justify-center">
        {/* Render each carousel individually */}
        <HomeSectionCarosel data={women_dress} sectionName={"Women's shirts"} />
        <HomeSectionCarosel data={women_dress} sectionName={"Women's shoes"} />
        <HomeSectionCarosel data={women_dress} sectionName={"Women's jeans"} />
        <HomeSectionCarosel data={women_dress} sectionName={"Women's shorts"} />
      </div>
    </div>
  );
};

export default HomePage;

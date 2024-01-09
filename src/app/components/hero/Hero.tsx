import React from 'react';
import Banner from './Banner';
import Teacher from '../teacherSection/Teacher';
import Fact from '../fact/Fact';

export default function Hero() {
  return (
    <div>
      <Banner></Banner>
      <Teacher></Teacher>
      <Fact></Fact>
    </div>
  );
}

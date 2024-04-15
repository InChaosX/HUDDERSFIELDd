import React from 'react';
import Bourse from '@/components/Das/Bourse';
import Video from '@/components/Das/Video';
import Accroding from '@/components/Das/Accroding';
import V_timeline from '@/components/Das/V_timeline';
import Gridd from '@/components/Das/Gridd';
import Contact from '@/components/Das/Contact';
import Test from '@/components/Das/Test';
import Heroo from '@/components/Das/Heroo';
import Griddd from '@/components/Das/Griddd';
import Stage from '@/components/Das/Stage';


export default async function IndexPage() {
  return (
    <div className="">
      <div className="">
        <Heroo />
        <Gridd />
        <Bourse />
        <Video />
        <V_timeline />
        <Griddd />
        <Test />
        <Stage/>
        <Accroding />
        <Contact />
       
      </div>
    </div>
  );
}

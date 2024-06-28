import React from 'react';
import Bourse from '@/components/Das/Bourse';

import Accroding from '@/components/Das/Accroding';
import V_timeline from '@/components/Das/V_timeline';
import Gridd from '@/components/Das/Gridd';
import Contact from '@/components/Das/Contact';
import Test from '@/components/Das/Test';
import Griddd from '@/components/Das/Griddd';
import Stage from '@/components/Das/Stage';
import Hero from '@/components/Das/Hero';
import Section2 from '@/components/Das/Section2';
import Imagee from '@/components/Das/Imagee';
import { NextSeo } from "next-seo";


export default async function IndexPage() {
   <NextSeo
     title="Huddersfield"
     description="Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life."
     canonical="https://www.huddersfield.ma/"
     openGraph={{
       url: "https://www.huddersfield.ma/",
       title: "NCUK Casablanca - Your Gateway to Higher Education",
       description:
         "NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today.",
       images: [
         {
           url: "https://www.huddersfield.ma/",
           width: 800,
           height: 600,
           alt: "Huddersfield",
         },
       ],
       site_name: "Huddersfield",
     }}
     twitter={{
       handle: "@Huddersfield",
       site: "@Huddersfield",
       cardType: "Huddersfield",
     }}
   />;
  return (
   
      <div className="overflow-hidden">
        {/* <Heroo /> */}
        <Section2 />
        <Hero />
        <Gridd />
        <Bourse />
        <Imagee/>
        <V_timeline />
        <Griddd />
        <Test />
        <Stage />
        <Accroding />
        <Contact />
      </div>
  
  );
}

import { getTranslate } from '@/tolgee/server';
// import { Todos } from './Todos';
// import { Link } from '@/navigation';

// import { Navbar } from '@/components/Navbar';
// import Hero from '@/components/Das/Hero';
import Bourse from '@/components/Das/Bourse';
import Video from '@/components/Das/Video';
import Accroding from '@/components/Das/Accroding';
import V_timeline from '@/components/Das/V_timeline';
import Gridd from '@/components/Das/Gridd';
import Grid from '@/components/Das/Grid';
import Contact from '@/components/Das/Contact';
import Test from '@/components/Das/Test';
import Asd from '@/components/Das/Asd';
// import Header from '@/components/Das/Header';
import Heroo from '@/components/Heroo';
import Dfr from '@/components/Das/Dfr';
import Finaly from '@/components/Das/Finaly';
// import Imat from '@/components/Imat';

export default async function IndexPage() {
  const t = await getTranslate();
  return (
    <div className="background-wrapper">
      <div className="example">
       
        {/* <Hero /> */}
        <Heroo/>
        {/* <Imat/> */}
        {/* <Dfr/>
        <Finaly/> */}
        <Gridd />
        <Bourse />
        <Video />
        <V_timeline />
        <Grid />
        <Test />
        {/* <Timeline/> */}
        <Asd />
        <Accroding />
        <Contact />

        {/* my componenet */}
      </div>
    </div>
  );
}

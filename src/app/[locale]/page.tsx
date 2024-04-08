import { getTranslate } from '@/tolgee/server';
import { Todos } from './Todos';
import { Link } from '@/navigation';

import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Das/Hero';
import Bourse from '@/components/Das/Bourse';
import Video from '@/components/Das/Video';
import Accroding from '@/components/Das/Accroding';
import V_timeline from '@/components/Das/V_timeline';
import Gridd from '@/components/Das/Gridd';
import Grid from '@/components/Das/Grid';
import Contact from '@/components/Das/Contact';
import Test from '@/components/Das/Test';
import Asd from '@/components/Das/Asd';
import Header from '@/components/Das/Header';

export default async function IndexPage() {
  const t = await getTranslate();
  return (
    <div className="background-wrapper">
      <div className="example">
        {/* <Navbar>
          <Link href="/translation-methods">
            {t("menu-item-translation-methods")}
          </Link>
        </Navbar> */}

        {/* <Header /> */}
        {/* <header>
          <img src="/img/appLogo.svg" />
          <h1 className="header__title">{t('app-title')}</h1>
        </header> */}
        {/* <Todos /> */}

        {/* my componenet */}
        {/* <h1 className="font-bold underline text-yellow-300">hello</h1> */}

        
        <Hero />
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

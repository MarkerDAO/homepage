import { useEffect, useRef } from 'react';
import { Footer } from './components/section/Footer';
import FQ from './components/section/FQ';
import Partners from './components/section/Partners';
import Resource from './components/section/Resource';
import Roadmap from './components/section/Roadmap';
import Section1 from './components/section/section1';
import Section2 from './components/section/section2';
import Section3 from './components/section/section3';
import Service from './components/section/Service';

function Home() {
  const wrapRef = useRef();
  useEffect(() => {
    if (wrapRef.current) {
      const navs = document.querySelectorAll('.header__nav');
      const wraps = wrapRef.current.querySelectorAll('.section-wrap[id]');
      const onScroll = () => {
        const { scrollY } = window;
        // eslint-disable-next-line for-direction
        for (let i = wraps.length - 1; i >= 0; i -= 1) {
          const wrap = wraps[i];
          const nav = navs[i];
          if (wrap.offsetTop <= scrollY) {
            const preEl = nav.previousElementSibling;
            const nextEl = nav.nextElementSibling;
            if (preEl && preEl.classList.contains('active')) {
              preEl.classList.remove('active');
            }
            if (nextEl && nextEl.classList.contains('active')) {
              nextEl.classList.remove('active');
            }
            if (!nav.classList.contains('active')) {
              nav.classList.add('active');
            }
            return;
          }
        }
      };
      document.addEventListener('scroll', onScroll);
      return () => {
        document.removeEventListener('scroll', onScroll);
      };
    }
  }, []);
  return (
    <div className="mt-16 container scroll-smooth" ref={wrapRef}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Service />
      <Roadmap />
      <Partners />
      <FQ />
      <Resource />
      <Footer />
    </div>
  );
}
export default Home;

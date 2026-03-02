import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Sectors from './components/Sectors';
import ContentTransmissao from './components/ContentTransmissao';
import ContentComunicacao from './components/ContentComunicacao';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="min-h-screen relative font-sans">
      <Loader />
      <Cursor />
      <Navigation />
      <Hero />
      <Sectors />
      <ContentTransmissao />
      <ContentComunicacao />
      <Footer />
    </div>
  );
}

export default App;

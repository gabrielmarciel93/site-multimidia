import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  // Removido UseGSAP genérico (.reveal-up) para delegar as animações
  // exclusivamente para os seus próprios componentes e suas classes customizadas (.reveal-item-trans / com)

  return (
    <div ref={container} className="min-h-screen relative font-sans">
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

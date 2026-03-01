import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.to('.scroll-arrow', {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }, { scope: container });

    const scrollToNext = () => {
        document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" ref={container} className="relative min-h-screen pt-32 pb-20 px-6 lg:px-20 overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-bg-dark)] to-black/80 -z-10"></div>

            {/* Decorative Blur Object */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand-blue/20 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-4xl pt-10 flex-1 flex flex-col justify-center">
                <h2 className="hero-text text-brand-blue uppercase font-semibold tracking-wider text-sm mb-4">
                    Apresentação por Gabriel Marciel
                </h2>
                <h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Multimídia para <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#137fec] to-blue-300">
                        Igrejas
                    </span>
                </h1>
                <p className="hero-text text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
                    A tecnologia e os recursos multimídia são ferramentas absurdamente poderosas para a expansão do Reino de Deus. Desde os tempos bíblicos, Deus sempre usou diferentes meios para comunicar Sua mensagem.
                </p>

                <div className="hero-text bg-bg-card/50 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md text-left mb-10">
                    <p className="text-text-secondary text-sm md:text-base italic">
                        "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei."
                    </p>
                    <p className="text-white mt-4 font-semibold text-sm">
                        — Mateus 28:19-20
                    </p>
                </div>

                <p className="hero-text text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
                    A multimídia é uma resposta direta a esse "IDE". Ela permite que a Palavra chegue a lugares onde a igreja física muitas vezes não consegue estar. Cultos online, devocionais em vídeo, artes digitais e conteúdos interativos são formas absurdamente eficazes de evangelizar e discipular. Mas deve ser usada com sabedoria, excelência e propósito.
                </p>
            </div>

            <button onClick={scrollToNext} className="scroll-arrow absolute bottom-10 text-white/50 hover:text-brand-blue transition-colors duration-300">
                <ChevronDown size={40} />
            </button>
        </section>
    );
};

export default Hero;

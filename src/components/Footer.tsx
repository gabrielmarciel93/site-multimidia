import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Download, FileText } from 'lucide-react';

const Footer = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.footer-content', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
            },
            scale: 0.95,
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.2)'
        });
    }, { scope: container });

    return (
        <footer id="footer" ref={container} className="relative py-20 px-6 lg:px-20 border-t border-white/5 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-brand-blue/10 blur-[120px] -z-10 rounded-full"></div>

            <div className="footer-content max-w-4xl mx-auto text-center flex flex-col items-center justify-center p-8 md:p-12 bg-bg-card/40 border border-white/10 rounded-3xl backdrop-blur-sm">
                <FileText size={48} className="text-brand-blue mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Acesse o Manual Completo
                </h2>
                <p className="text-text-secondary text-base md:text-lg mb-10 max-w-2xl">
                    Quer todo o conteúdo de como estruturar, inspirar e liderar os setores de Multimídia para Igrejas com excelência? Baixe agora.
                </p>

                <a
                    href="/Starty-day-Conteudo.pdf"
                    download="Multimidia_Para_Igrejas_Material_Completo.pdf"
                    className="group flex items-center justify-center gap-3 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-lg py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(19,127,236,0.4)]"
                >
                    <Download size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    Baixar Conteúdo em PDF
                </a>
            </div>

            <div className="mt-20 text-center text-text-secondary text-sm">
                <p>© 2026 <a href="https://www.instagram.com/gabrielmarcieloficial/" target="_blank" rel="Gabriel Marciel" className="text-brand-blue hover:text-blue-500 transition-colors">@gabrielmarcieloficial</a>. Todos os direitos reservados.</p>
                <p className="mt-2 text-xs opacity-50">Construindo comunicação de excelência no Reino.</p>
            </div>
        </footer>
    );
};

export default Footer;

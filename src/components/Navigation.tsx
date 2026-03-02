import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Navigation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSections, setTotalSections] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.scroll-section');
            if (sections.length > 0) {
                setTotalSections(sections.length);
            }
            const currentPos = window.scrollY + window.innerHeight / 2;
            let activeIndex = 0;

            sections.forEach((element, index) => {
                const offsetTop = (element as HTMLElement).offsetTop;
                if (currentPos >= offsetTop) {
                    activeIndex = index;
                }
            });
            setCurrentIndex(activeIndex);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check with a small timeout to let React layout finish
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (index: number) => {
        const sections = document.querySelectorAll('.scroll-section');
        if (index >= 0 && index < sections.length) {
            const element = sections[index] as HTMLElement;
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-3">
            <button
                onClick={() => scrollTo(currentIndex - 1)}
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-bg-card/80 border border-white/10 backdrop-blur-md text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 shadow-lg cursor-pointer ${currentIndex === 0 ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}
                aria-label="Sessão Anterior"
            >
                <ChevronUp size={24} className="pointer-events-none" />
            </button>

            <button
                onClick={() => scrollTo(currentIndex + 1)}
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/90 border border-white/10 backdrop-blur-md text-white hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(19,127,236,0.6)] cursor-pointer ${totalSections > 0 && currentIndex >= totalSections - 1 ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'}`}
                aria-label="Próxima Sessão"
                title="Próxima sessão"
            >
                <ChevronDown size={28} className="pointer-events-none" />
            </button>
        </div>
    );
};

export default Navigation;

import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const sections = ['hero', 'sectors', 'transmissao', 'comunicacao', 'footer'];

const Navigation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Find the currently active section based on scroll position
            const currentPos = window.scrollY + window.innerHeight / 2;
            let activeIndex = 0;

            sections.forEach((id, index) => {
                const element = document.getElementById(id);
                if (element) {
                    // we use some offset to trigger earlier
                    const offsetTop = element.offsetTop;
                    if (currentPos >= offsetTop) {
                        activeIndex = index;
                    }
                }
            });
            setCurrentIndex(activeIndex);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (index: number) => {
        if (index >= 0 && index < sections.length) {
            const element = document.getElementById(sections[index]);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-3">
            <button
                onClick={() => scrollTo(currentIndex - 1)}
                className={`p-3 rounded-full bg-bg-card/80 border border-white/10 backdrop-blur-md text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 shadow-lg ${currentIndex === 0 ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}
                aria-label="Sessão Anterior"
            >
                <ChevronUp size={24} />
            </button>

            <button
                onClick={() => scrollTo(currentIndex + 1)}
                className={`p-3 rounded-full bg-brand-blue/90 border border-white/10 backdrop-blur-md text-white hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(19,127,236,0.6)] ${currentIndex === sections.length - 1 ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'}`}
                aria-label="Próxima Sessão"
                title="Próxima sessão"
            >
                <ChevronDown size={28} />
            </button>
        </div>
    );
};

export default Navigation;

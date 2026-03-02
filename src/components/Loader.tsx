import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Globe, Camera } from 'lucide-react';

const Loader = () => {
    const container = useRef<HTMLDivElement>(null);
    const globeRef = useRef<SVGSVGElement>(null);
    const cameraRef = useRef<SVGSVGElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = '';
                setIsLoading(false);
            }
        });

        tl.from(globeRef.current, {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.5)'
        })
            .from(cameraRef.current, {
                scale: 0,
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.2)'
            }, "-=0.5")
            // small pulsing / rotating animation
            .to(globeRef.current, {
                rotation: 360,
                duration: 2,
                repeat: -1,
                ease: 'linear'
            }, "-=0.8")
            // Fake loading delay to let user see animation
            .to({}, { duration: 1.5 })
            // Exit animation
            .to([globeRef.current, cameraRef.current], {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.in'
            })
            .to(container.current, {
                yPercent: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.inOut'
            });

        // Cleanup
        return () => {
            tl.kill();
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={container}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="relative flex items-center justify-center">
                <Globe
                    ref={globeRef}
                    size={80}
                    className="text-brand-blue/30 absolute"
                />
                <Camera
                    ref={cameraRef}
                    size={40}
                    className="text-white z-10"
                />
            </div>

            <div className="mt-8 text-white/50 text-sm font-medium tracking-[0.2em] uppercase">
                Aguarde...
            </div>

            {/* Background glow for loader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/20 blur-[100px] z-0 rounded-full"></div>
        </div>
    );
};

export default Loader;

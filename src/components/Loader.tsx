import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Globe } from 'lucide-react';

const Loader = () => {
    const container = useRef<HTMLDivElement>(null);
    const globeRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading safely
        document.documentElement.classList.add('overflow-hidden');
        document.body.classList.add('overflow-hidden');

        const tl = gsap.timeline({
            onComplete: () => {
                document.documentElement.classList.remove('overflow-hidden');
                document.body.classList.remove('overflow-hidden');
                setIsLoading(false);
            }
        });

        // Independent infinite animation so it doesn't block the main timeline
        const spinTween = gsap.to(globeRef.current, {
            rotation: "+=360",
            duration: 4,
            repeat: -1,
            ease: 'linear'
        });

        // Progress counter animation (0 to 100%)
        const progressObj = { value: 0 };
        gsap.to(progressObj, {
            value: 100,
            duration: 3.3, // Matches the entrance + faux delay time
            ease: "power2.inOut",
            onUpdate: () => {
                setProgress(Math.round(progressObj.value));
            }
        });

        tl.from(globeRef.current, {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.5)'
        })
            // Fake loading delay to let user see animation
            .to({}, { duration: 1.5 })
            // Exit animation
            .to(globeRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
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
            spinTween.kill();
            document.documentElement.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={container}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="relative flex items-center justify-center mb-12">
                <div ref={globeRef}>
                    <Globe
                        size={80}
                        className="text-brand-blue"
                    />
                </div>
            </div>

            {/* Tech Progress Container */}
            <div className="flex flex-col items-center w-64 mt-4 z-10">
                <div className="flex justify-between w-full mb-2 text-brand-blue text-xs font-mono tracking-widest uppercase">
                    <span>Sistema</span>
                    <span>{progress}%</span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                    {/* Progress Bar Fill */}
                    <div
                        className="h-full bg-brand-blue shadow-[0_0_15px_rgba(19,127,236,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Background glow for loader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/20 blur-[100px] z-0 rounded-full"></div>
        </div>
    );
};

export default Loader;

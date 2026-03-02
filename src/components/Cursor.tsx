import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // GSAP quickTo is optimized for mouse moved events
        const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3' });
        const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3' });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
            style={{ transform: 'translate(-50%, -50%)' }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#b4e6f5] drop-shadow-[0_0_8px_rgba(180,230,245,0.8)]"
            >
                {/* Arrow shape based on standard cursor design, pointing top-left */}
                <path
                    d="M4.5 3.5L18.5 10.5L11.5 12.5L9.5 19.5L4.5 3.5Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default Cursor;

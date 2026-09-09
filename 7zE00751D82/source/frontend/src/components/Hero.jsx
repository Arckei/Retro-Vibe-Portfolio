import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { PROFILE } from "@/data";
import { scrollToSection } from "@/components/Nav";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay, className }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay }}
            className={`block ${className}`}
        >
            {children}
        </motion.span>
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const avatarY = useTransform(scrollYProgress, [0, 1], [0, -90]);
    const gridY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            id="top"
            ref={ref}
            className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
            data-testid="hero-section"
        >
            <motion.div style={{ y: gridY }} className="absolute inset-0 pointer-events-none">
                <div className="synth-grid" />
            </motion.div>
            <div className="absolute top-24 -left-10 font-display font-black text-[16rem] leading-none text-outline-faint select-none pointer-events-none hidden lg:block">
                89
            </div>

            <motion.div
                style={{ opacity: fade }}
                className="relative z-10 w-full px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-16 items-center"
            >
                <div className="lg:col-span-7">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-pixel text-[10px] md:text-xs text-[#39FF14] glow-green mb-8"
                        data-testid="hero-tagline"
                    >
                        {PROFILE.tagline}
                        <span className="blink ml-1">█</span>
                    </motion.p>

                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-[4.25rem] tracking-tighter leading-none" data-testid="hero-heading">
                        <MaskedLine delay={0.45} className="text-[#F8F8F2]">
                            {PROFILE.firstLine}
                        </MaskedLine>
                        <MaskedLine delay={0.6} className="text-outline-pink glow-pink">
                            {PROFILE.secondLine}
                        </MaskedLine>
                        <MaskedLine delay={0.75} className="text-xl sm:text-2xl md:text-3xl tracking-[0.3em] text-[#00F0FF] glow-cyan mt-6 font-bold">
                            — {PROFILE.role}
                        </MaskedLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.05, duration: 0.9, ease: EASE }}
                        className="mt-10 max-w-xl text-[#A1A1AA] leading-relaxed text-sm md:text-base"
                        data-testid="hero-description"
                    >
                        IT student and full stack developer — I ship library systems
                        in C# and SQL Server, websites in JavaScript, HTML and CSS, and
                        apps across desktop, web and mobile. Everything built with an
                        8-bit heart.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.9, ease: EASE }}
                        className="mt-12 flex flex-wrap gap-5"
                    >
                        <button
                            onClick={() => scrollToSection("work")}
                            className="bg-[#FF007F] text-[#050505] font-bold px-8 py-4 text-sm tracking-[0.2em] shadow-[0_0_25px_rgba(255,0,127,0.45)] hover:shadow-[0_0_45px_rgba(255,0,127,0.8)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
                            data-testid="hero-cta-projects"
                        >
                            VIEW PROJECTS
                            <ArrowDown size={16} />
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="border border-[#00F0FF] text-[#00F0FF] px-8 py-4 text-sm tracking-[0.2em] hover:bg-[#00F0FF] hover:text-[#050505] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-colors duration-300"
                            data-testid="hero-cta-contact"
                        >
                            SAY HELLO
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    style={{ y: avatarY }}
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 1, ease: EASE }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                            data-testid="hero-avatar"
                        >
                            <div className="absolute -inset-3 border border-[#FF007F] opacity-60" />
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00F0FF]" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00F0FF]" />
                            <img
                                src={PROFILE.avatar}
                                alt="Alex Rivera pixel avatar"
                                className="w-full h-full object-cover shadow-[0_0_60px_rgba(255,0,127,0.35)]"
                                style={{ imageRendering: "pixelated" }}
                            />
                            <div className="absolute inset-0 bg-[#FF007F] mix-blend-overlay opacity-20 pointer-events-none" />
                        </motion.div>
                        <div className="absolute -bottom-8 left-0 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#A1A1AA]">
                            <Sparkles size={12} className="text-[#FFD700]" />
                            PLAYER ONE · LV.99
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#A1A1AA]"
            >
                <span className="w-10 h-px bg-[#FF007F]" />
                SCROLL TO CONTINUE
            </motion.div>
        </section>
    );
}

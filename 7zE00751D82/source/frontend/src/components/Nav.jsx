import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const LINKS = [
    { id: "skills", label: "SKILLS" },
    { id: "work", label: "WORK" },
    { id: "contact", label: "CONTACT" },
];

export const scrollToSection = (id) => {
    if (window.__lenis) {
        window.__lenis.scrollTo(`#${id}`, { offset: -72 });
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
};

export default function Nav() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        const tick = () =>
            setClock(
                new Date().toLocaleTimeString("en-GB", { hour12: false })
            );
        tick();
        const t = setInterval(tick, 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-[#27272A]"
            data-testid="main-nav"
        >
            <div className="px-6 md:px-12 lg:px-24 h-[72px] flex items-center justify-between">
                <button
                    onClick={() => scrollToSection("top")}
                    className="flex items-center gap-3 group"
                    data-testid="nav-logo"
                >
                    <span className="w-8 h-8 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-[#050505] transition-colors duration-300">
                        <Terminal size={15} />
                    </span>
                    <span className="font-pixel text-[10px] tracking-widest text-[#F8F8F2] group-hover:glow-cyan transition-all duration-300">
                        KEI.DEV
                    </span>
                </button>

                <nav className="hidden md:flex items-center gap-10">
                    {LINKS.map((l, i) => (
                        <button
                            key={l.id}
                            onClick={() => scrollToSection(l.id)}
                            className="neon-link text-sm tracking-[0.15em] text-[#A1A1AA] hover:text-[#F8F8F2] transition-colors duration-300"
                            data-testid={`nav-link-${l.id}`}
                        >
                            <span className="text-[#FF007F] mr-1">0{i + 1}/</span>
                            {l.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <span
                        className="hidden lg:block font-pixel text-[9px] text-[#39FF14] glow-green"
                        data-testid="nav-clock"
                    >
                        {clock}
                    </span>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="border border-[#FF007F] text-[#FF007F] px-5 py-2 text-xs tracking-[0.2em] hover:bg-[#FF007F] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-colors duration-300"
                        data-testid="nav-cta-terminal"
                    >
                        OPEN TERMINAL
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

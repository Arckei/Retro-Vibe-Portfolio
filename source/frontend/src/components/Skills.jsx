import { motion } from "framer-motion";
import { SKILL_CHAPTERS } from "@/data";

const EASE = [0.16, 1, 0.3, 1];

const LevelBar = ({ level }) => (
    <div className="flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
            <span
                key={i}
                className={`w-3 h-2 ${
                    i < level
                        ? "bg-[#00F0FF] shadow-[0_0_6px_rgba(0,240,255,0.7)]"
                        : "bg-[#27272A]"
                }`}
            />
        ))}
    </div>
);

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
            data-testid="skills-section"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mb-16 md:mb-24"
            >
                <p className="font-pixel text-[10px] text-[#FF007F] glow-pink mb-6">
                    &gt; LOAD SKILL_TREE.DAT
                </p>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
                    THE MANIFESTO
                    <span className="text-outline-cyan ml-4">OF SKILLS</span>
                </h2>
            </motion.div>

            <div className="border-t border-[#27272A]">
                {SKILL_CHAPTERS.map((chapter, ci) => (
                    <motion.div
                        key={chapter.index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: EASE, delay: ci * 0.08 }}
                        className="group relative border-b border-[#27272A] py-10 md:py-14 grid md:grid-cols-12 gap-8 items-start overflow-hidden"
                        data-testid={`skills-chapter-${chapter.index}`}
                    >
                        <div className="absolute inset-0 bg-[#0F0F13] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out -z-0" />

                        <div className="relative z-10 md:col-span-3 flex md:block items-baseline gap-4">
                            <span className="font-display font-black text-5xl md:text-7xl text-outline-pink group-hover:glow-pink transition-all duration-500">
                                {chapter.index}
                            </span>
                        </div>

                        <div className="relative z-10 md:col-span-4">
                            <h3 className="font-display font-bold text-xl sm:text-2xl tracking-wide uppercase text-[#F8F8F2] group-hover:text-[#00F0FF] group-hover:glow-cyan transition-colors duration-500">
                                {chapter.title}
                            </h3>
                            <p className="mt-3 text-sm text-[#A1A1AA] italic">
                                // {chapter.note}
                            </p>
                        </div>

                        <div className="relative z-10 md:col-span-5 space-y-4">
                            {chapter.skills.map((s) => (
                                <div
                                    key={s.name}
                                    className="flex items-center justify-between gap-6"
                                    data-testid={`skill-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                >
                                    <span className="text-sm tracking-[0.1em] text-[#F8F8F2]">
                                        {s.name}
                                    </span>
                                    <LevelBar level={s.level} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

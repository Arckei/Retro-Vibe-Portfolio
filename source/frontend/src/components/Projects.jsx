import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data";

const EASE = [0.16, 1, 0.3, 1];

const ProjectCard = ({ project, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE, delay: (index % 2) * 0.12 }}
        className={`group relative bg-[#0F0F13] border border-[#27272A] hover:border-[#00F0FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] transition-colors duration-500 ${project.span} ${
            index === 1 || index === 2 ? "md:mt-16" : ""
        }`}
        data-testid={`project-card-${project.id}`}
    >
        <div className="relative h-56 md:h-64 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover saturate-[0.6] group-hover:saturate-150 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
            <span className="absolute top-4 left-4 font-pixel text-[9px] text-[#FFD700] bg-[#050505]/80 px-3 py-2">
                PRJ_0{project.id}
            </span>
            <span className="absolute top-4 right-4 text-[10px] tracking-[0.25em] text-[#00F0FF] bg-[#050505]/80 px-3 py-2">
                {project.kind}
            </span>
        </div>

        <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-[#FF007F] group-hover:glow-pink transition-colors duration-500">
                    {project.title}
                </h3>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="shrink-0 w-10 h-10 border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:border-[#FF007F] hover:text-[#FF007F] hover:shadow-[0_0_15px_rgba(255,0,127,0.5)] transition-all duration-500"
                    data-testid={`project-link-${project.id}`}
                >
                    <ArrowUpRight size={16} />
                </a>
            </div>
            <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
                {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-[10px] tracking-[0.2em] uppercase border border-[#27272A] text-[#A1A1AA] px-3 py-1.5 group-hover:border-[#00F0FF]/40 group-hover:text-[#00F0FF] transition-colors duration-500"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.article>
);

export default function Projects() {
    return (
        <section
            id="work"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-[#0A0A0A]"
            data-testid="projects-section"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mb-16 md:mb-24 flex flex-wrap items-end justify-between gap-8"
            >
                <div>
                    <p className="font-pixel text-[10px] text-[#00F0FF] glow-cyan mb-6">
                        &gt; INSERT COIN TO VIEW WORK
                    </p>
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
                        SELECTED
                        <span className="text-outline-pink ml-4">BUILDS</span>
                    </h2>
                </div>
                <p className="text-sm text-[#A1A1AA] max-w-xs leading-relaxed">
                    Real builds shipped to GitHub — a desktop library system, a
                    security website and a pure-HTML project.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </section>
    );
}

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { PROFILE, SOCIALS } from "@/data";

const EASE = [0.16, 1, 0.3, 1];
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [output, setOutput] = useState([
        "> connection established...",
        "> awaiting transmission_",
    ]);
    const [sending, setSending] = useState(false);

    const pushLine = (line) => setOutput((prev) => [...prev.slice(-6), line]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        pushLine(`> transmitting message from ${form.name || "unknown"}...`);
        try {
            await axios.post(`${API}/contact`, form);
            pushLine("> [OK] message received. keith will respond shortly.");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            pushLine("> [ERR] transmission failed. try the mail.sh link below.");
        } finally {
            setSending(false);
        }
    };

    const inputCls =
        "w-full bg-transparent border border-[#27272A] focus:border-[#39FF14] focus:shadow-[0_0_15px_rgba(57,255,20,0.25)] outline-none px-4 py-3 text-sm text-[#F8F8F2] placeholder:text-[#52525B] transition-colors duration-300";

    return (
        <section
            id="contact"
            className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40"
            data-testid="contact-section"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mb-16 md:mb-24"
            >
                <p className="font-pixel text-[10px] text-[#39FF14] glow-green mb-6">
                    &gt; INIT CONTACT_PROTOCOL
                </p>
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
                    OPEN A
                    <span className="text-outline-cyan ml-4">CHANNEL</span>
                </h2>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="lg:col-span-5 space-y-10"
                >
                    <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base max-w-md">
                        Got a project, a collab, or just want to talk retro tech?
                        Run any of these executables or drop a message through the
                        terminal.
                    </p>

                    <div className="space-y-4" data-testid="social-links-list">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.id}
                                href={s.url}
                                target={s.id === "email" ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 border border-[#27272A] hover:border-[#FF007F] px-5 py-4 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] transition-all duration-300"
                                data-testid={`social-${s.id}`}
                            >
                                <span className="text-[#FF007F] font-bold">&gt;</span>
                                <span className="text-sm tracking-[0.15em] text-[#F8F8F2] group-hover:glow-pink group-hover:text-[#FF007F] transition-colors duration-300">
                                    run {s.label}
                                </span>
                                <span className="ml-auto text-[#39FF14] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blink text-xs">
                                    ▶
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="text-xs text-[#A1A1AA] space-y-1">
                        <p>LOCATION: THE GRID</p>
                        <p>
                            DIRECT LINE:{" "}
                            <a
                                href={`mailto:${PROFILE.email}`}
                                className="text-[#00F0FF] neon-link"
                                data-testid="contact-direct-email"
                            >
                                {PROFILE.email}
                            </a>
                        </p>
                        <p>
                            STATUS: <span className="text-[#39FF14] glow-green">ONLINE</span>
                            <span className="blink ml-1">█</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                    className="lg:col-span-7"
                >
                    <div className="border border-[#27272A] bg-black shadow-[0_0_40px_rgba(0,240,255,0.08)]">
                        <div className="flex items-center gap-2 border-b border-[#27272A] px-5 py-3">
                            <span className="w-3 h-3 bg-[#FF007F]" />
                            <span className="w-3 h-3 bg-[#FFD700]" />
                            <span className="w-3 h-3 bg-[#39FF14]" />
                            <span className="ml-4 font-pixel text-[9px] text-[#A1A1AA]">
                                GUEST@KEI.DEV:~/contact
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6" data-testid="contact-form">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] tracking-[0.25em] text-[#00F0FF] mb-2">
                                        $ NAME
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="your_handle"
                                        className={inputCls}
                                        data-testid="contact-name-input"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-[0.25em] text-[#00F0FF] mb-2">
                                        $ EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="you@domain.net"
                                        className={inputCls}
                                        data-testid="contact-email-input"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-[0.25em] text-[#00F0FF] mb-2">
                                    $ MESSAGE
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="type your transmission here..."
                                    className={`${inputCls} resize-none`}
                                    data-testid="contact-message-input"
                                />
                            </div>

                            <div className="min-h-[88px] border border-[#27272A] bg-[#050505] p-4 text-xs leading-6 text-[#39FF14]" data-testid="terminal-output">
                                {output.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                                <span className="blink">█</span>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-[#39FF14] text-[#050505] font-bold py-4 text-sm tracking-[0.25em] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
                                data-testid="contact-form-submit"
                            >
                                {sending ? "TRANSMITTING..." : "EXECUTE SEND.EXE"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

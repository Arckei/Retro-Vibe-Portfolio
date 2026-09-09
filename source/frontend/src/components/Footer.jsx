import { PROFILE } from "@/data";
import { scrollToSection } from "@/components/Nav";

export default function Footer() {
    return (
        <footer
            className="border-t border-[#27272A] bg-[#050505] px-6 md:px-12 lg:px-24 py-12"
            data-testid="site-footer"
        >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <p className="font-pixel text-[10px] text-[#F8F8F2]">KW.DEV</p>
                    <p className="mt-3 text-xs text-[#A1A1AA]">
                        © {new Date().getFullYear()} {PROFILE.name} — NO RIGHTS RESERVED, JUST VIBES.
                    </p>
                </div>
                <p className="font-pixel text-[9px] text-[#FF007F] glow-pink">
                    GAME OVER? INSERT COIN ↻
                </p>
                <button
                    onClick={() => scrollToSection("top")}
                    className="text-xs tracking-[0.25em] text-[#00F0FF] neon-link"
                    data-testid="footer-back-to-top"
                >
                    ↑ BACK TO TOP
                </button>
            </div>
        </footer>
    );
}

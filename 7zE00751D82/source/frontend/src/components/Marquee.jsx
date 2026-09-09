import { MARQUEE_ITEMS } from "@/data";

export default function Marquee({ reverse = false }) {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div
            className="relative border-y border-[#27272A] bg-[#0A0A0A] py-6 overflow-hidden"
            data-testid={reverse ? "marquee-bottom" : "marquee-top"}
        >
            <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center shrink-0 font-display font-bold text-3xl md:text-5xl tracking-tight px-6"
                    >
                        <span className={i % 2 === 0 ? "text-outline-cyan" : "text-outline-pink"}>
                            {item}
                        </span>
                        <span className="ml-12 text-[#FFD700] text-xl md:text-2xl">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

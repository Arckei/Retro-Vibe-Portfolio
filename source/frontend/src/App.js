import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
        window.__lenis = lenis;
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="bg-[#050505] text-[#F8F8F2] min-h-screen" data-testid="app-root">
            <div className="scanlines" aria-hidden="true" />
            <div className="crt-vignette" aria-hidden="true" />
            <div className="grain" aria-hidden="true" />
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <Skills />
                <Projects />
                <Marquee reverse />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

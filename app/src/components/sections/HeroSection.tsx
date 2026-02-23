import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/background.mp4?v=20260222" type="video/mp4" />
                </video>
                {/* Overlay Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-sm md:text-2xl font-light tracking-[0.3em] uppercase text-primary/90 mb-4 md:mb-6 drop-shadow-md">
                        Competencia de Danza
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-foreground drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] tracking-wider md:tracking-wide mb-6 md:mb-8 leading-tight">
                        DUETO <br className="md:hidden" /> <span className="text-primary italic font-light">de</span> ALMAS
                    </h1>
                    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16 space-y-3 md:space-y-4">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-2"></div>
                        <p className="text-base md:text-xl font-light tracking-wider text-foreground/90 text-balance px-4 drop-shadow-md">
                            Donde la técnica se encuentra con la pasión.
                        </p>
                        <p className="font-serif italic text-primary/90 font-light text-xl md:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.2)]">
                            Hacé que cada movimiento cuente una historia.
                        </p>
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <a
                        href="#esencia"
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-primary/50 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                        aria-label="Descubrir más"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export function EsenciaSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [userWantsAudio, setUserWantsAudio] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        // Ensure playback always starts muted immediately to satisfy browser policies
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Ignore if it fails
            });
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!videoRef.current) return;

                if (entry.isIntersecting) {
                    // Restore the user's audio preference if they scroll back into view
                    if (userWantsAudio) {
                        videoRef.current.muted = false;
                        setIsMuted(false);
                    }
                } else {
                    // Always mute when scrolling out of view so audio doesn't linger
                    videoRef.current.muted = true;
                    setIsMuted(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the video is in view
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, [userWantsAudio]);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !videoRef.current.muted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
            setUserWantsAudio(!newMutedState); // Remember their choice
        }
    };

    return (
        <section id="esencia" className="relative py-24 md:py-32 w-full overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Text Content */}
                    <div className="space-y-8 relative z-10 order-2 lg:order-1 pt-8 lg:pt-0">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-secondary-foreground font-semibold tracking-widest uppercase text-sm mb-2 opacity-80">
                                El Propósito
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                Más que una <br />
                                <span className="text-primary italic font-light">Competencia</span>
                            </h2>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed font-light">
                            "Dueto de Almas" es el escenario donde la técnica rinde homenaje a la emoción.
                            Creemos que el verdadero arte ocurre en esa fracción de segundo donde dos intérpretes respiran como uno solo.
                            Evaluamos la precisión, pero ovacionamos la vulnerabilidad, la entrega y esa sincronía profunda que trasciende el movimiento.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="group h-[160px] w-full [perspective:1000px] cursor-pointer">
                                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] glass-panel border border-border/50 bg-card/30 backdrop-blur-md rounded-xl">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Mito</h4>
                                        <p className="text-base sm:text-lg text-foreground/80 font-medium text-center leading-tight">"Es solo para profesionales"</p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel border border-primary/50 bg-primary/10 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-primary mb-2">Verdad</h4>
                                        <p className="text-sm text-foreground/90 text-center leading-tight">Hay categorías para todos los niveles: Principiante, Intermedio y Avanzado.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group h-[160px] w-full [perspective:1000px] cursor-pointer">
                                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] glass-panel border border-border/50 bg-card/30 backdrop-blur-md rounded-xl">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Mito</h4>
                                        <p className="text-base sm:text-lg text-foreground/80 font-medium text-center leading-tight">"Solo importa la técnica"</p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel border border-primary/50 bg-primary/10 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-primary mb-2">Verdad</h4>
                                        <p className="text-sm text-foreground/90 text-center leading-tight">Evaluamos la presencia escénica, conexión, y la entrega igual que la técnica.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 (Spans 2 columns on small/medium screens to look good) */}
                            <div className="group h-[160px] w-full [perspective:1000px] cursor-pointer sm:col-span-2 mx-auto sm:w-3/4">
                                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] glass-panel border border-border/50 bg-card/30 backdrop-blur-md rounded-xl">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Mito</h4>
                                        <p className="text-base sm:text-lg text-foreground/80 font-medium text-center leading-tight">"Es una competencia fría"</p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel border border-primary/50 bg-primary/10 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        <h4 className="font-sans text-xs tracking-widest uppercase text-primary mb-2">Verdad</h4>
                                        <p className="text-sm text-foreground/90 text-center leading-tight">Es un espacio de comunidad, aprendizaje y energía de retroalimentación.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Reel Video Container */}
                    <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-sm lg:max-w-[400px] order-1 lg:order-2 group">
                        {/* Glowing Border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/60 to-transparent rounded-xl blur-md opacity-70" />

                        <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-card">
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover scale-[1.02]"
                            >
                                <source src="/f2mp_com_720p_instagram_video_reel_DLQXFzZSm8U.mp4?v=20260222" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none" />

                            {/* Audio Toggle Button floating over the video */}
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 text-foreground shadow-lg hover:scale-110 hover:bg-background/80 transition-all duration-300 pointer-events-auto"
                                aria-label={isMuted ? "Activar sonido del video" : "Silenciar video"}
                            >
                                {isMuted ? <VolumeX className="w-5 h-5 text-muted-foreground" /> : <Volume2 className="w-5 h-5 text-primary" />}
                            </button>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 text-primary/20 pointer-events-none">
                            <svg width="120" height="120" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

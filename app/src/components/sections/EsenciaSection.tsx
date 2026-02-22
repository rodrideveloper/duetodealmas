import { motion } from 'framer-motion';

export function EsenciaSection() {
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
                    <div className="space-y-8 relative z-10">
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

                        <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4">
                            <div className="glass-panel p-6 border border-border/50 bg-card/30 backdrop-blur-md rounded-md flex-1">
                                <h4 className="font-serif text-xl text-primary mb-2">Conexión Auténtica</h4>
                                <p className="text-sm text-foreground/60">Buscamos el diálogo invisible; cuerpos que narran una historia de a dos.</p>
                            </div>
                            <div className="glass-panel p-6 border border-border/50 bg-card/30 backdrop-blur-md rounded-md flex-1">
                                <h4 className="font-serif text-xl text-primary mb-2">Evolución Compartida</h4>
                                <p className="text-sm text-foreground/60">Un espacio diseñado para inspirar, desafiar y elevar el arte de bailar en compañía.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Reel Video Container */}
                    <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-md lg:max-w-[400px]">
                        {/* Glowing Border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/60 to-transparent rounded-xl blur-md opacity-70" />

                        <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-card">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover scale-[1.02]"
                            >
                                <source src="/f2mp_com_720p_instagram_video_reel_DLQXFzZSm8U.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
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

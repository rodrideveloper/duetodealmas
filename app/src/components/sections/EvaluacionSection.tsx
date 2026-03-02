import { motion } from 'framer-motion';

export function EvaluacionSection() {
    const criterios = [
        { name: 'Conexión', desc: 'Sinergia entre ambos, comunicación no verbal y complementariedad fluida.' },
        { name: 'Interpretación musical', desc: 'Interpretación del ritmo, fraseo musical y matices dinámicos.' },
        { name: 'Tiempo', desc: 'Precisión y ejecución de los movimientos en el tiempo y compás correspondiente.' },
        { name: 'Estilo', desc: 'Expresión personal, postura, movimiento corporal y actitud en la pista.' },
    ];

    return (
        <section id="evaluacion" className="py-24 bg-card/10 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-secondary-foreground font-semibold tracking-widest uppercase text-sm mb-2">
                            El Sistema
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                            Cómo se <span className="text-primary italic font-light">Evalúa</span>
                        </h2>
                        <p className="text-lg text-foreground/70 font-light max-w-xl leading-relaxed">
                            Nuestro panel de jurados observa el panorama completo. Valoramos la
                            presencia individual siempre y cuando sirva para potenciar la pieza
                            en conjunto.
                        </p>
                        <a href="/reglamento.pdf" target="_blank" rel="noopener noreferrer" download className="inline-block mt-8 text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-foreground hover:border-foreground transition-colors">
                            Descargar Reglamento Completo
                        </a>
                    </motion.div>

                    {/* Evaluation Stats Grid */}
                    <motion.div
                        className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {criterios.map((crit, index) => (
                            <motion.div
                                key={crit.name}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                className="bg-background border border-border/50 rounded-xl p-6 relative overflow-hidden group flex flex-col justify-center"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity -mt-2 -mr-2 cursor-default pointer-events-none">
                                    <span className="text-8xl font-sans font-black text-foreground">{(index + 1).toString().padStart(2, '0')}</span>
                                </div>

                                <h4 className="font-serif text-2xl text-primary mb-3 relative z-10">
                                    {crit.name}
                                </h4>

                                <div className="w-12 h-[2px] bg-primary/40 group-hover:bg-primary transition-all duration-300 mb-4 rounded-full relative z-10" />

                                <p className="text-sm text-foreground/60 leading-relaxed z-10 relative">
                                    {crit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

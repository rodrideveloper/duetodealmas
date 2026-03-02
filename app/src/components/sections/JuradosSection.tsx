import { motion } from 'framer-motion';

export function JuradosSection() {
    const jurados = [
        { id: 1, image: '/aylen_bossi.jpeg', alt: 'Aylu Bossi', name: 'Aylu Bossi' },
        { id: 2, image: '/sebas_martinez.jpeg', alt: 'Sebas Martinez', name: 'Sebas Martinez' },
        { id: 3, image: '/china_merelle.jpeg', alt: 'Antonella Merelle', name: 'Antonella Merelle' },
    ];

    return (
        <section id="jurados" className="py-24 bg-background relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-secondary-foreground font-semibold tracking-widest uppercase text-sm mb-4">
                            Invitados Especiales
                        </h3>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
                            Nuestro <span className="text-primary italic font-light">Jurado</span>
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/80 font-light mb-12 max-w-2xl mx-auto">
                            Contaremos con la presencia de referentes y maestros que evaluarán a los participantes.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto flex justify-center items-center">
                    {jurados.map((jurado, idx) => (
                        <motion.div
                            key={jurado.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl mx-auto w-full aspect-[4/5] border border-border/50 bg-card/40 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:-translate-y-2">
                                <img
                                    src={jurado.image}
                                    alt={jurado.alt}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h4 className="font-serif text-2xl md:text-3xl text-primary font-bold text-center tracking-wide mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {jurado.name}
                                    </h4>
                                    <div className="w-8 h-[2px] bg-primary/40 group-hover:bg-primary group-hover:w-16 transition-all duration-500 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

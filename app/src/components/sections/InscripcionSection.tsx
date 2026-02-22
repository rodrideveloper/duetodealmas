import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// Assume we will install lucide-react or use raw SVGs.
// Since shadcn often bundles lucide-react, we can use it, but for stability we'll use simple HTML for now.

export function InscripcionSection() {
    const [timeLeft, setTimeLeft] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    useEffect(() => {
        // Current target date from original code
        const targetDate = new Date('October 20, 2026 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    segundos: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="inscripcion" className="py-24 md:py-32 relative text-center border-t border-border">
            {/* Background with slight gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                        Comienza la <span className="text-primary italic font-light">Cuenta Regresiva</span>
                    </h2>
                    <p className="text-lg text-foreground/60 font-light mb-12">
                        Asegurá el lugar de tu dúo hoy mismo. Los cupos son limitados.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="flex flex-col items-center">
                                <div className="w-20 h-24 md:w-32 md:h-36 glass-panel rounded-xl flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] mb-4 bg-background">
                                    <span className="text-4xl md:text-6xl font-serif text-primary drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]">
                                        {value < 10 ? `0${value}` : value}
                                    </span>
                                </div>
                                <span className="text-sm md:text-base uppercase tracking-widest text-foreground/70 font-medium">
                                    {unit}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <button
                                className="px-10 py-4 bg-foreground text-background font-serif text-lg tracking-widest uppercase hover:text-primary-foreground hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] rounded-sm group relative overflow-hidden"
                            >
                                <span className="relative z-10">Quiero Inscribirme</span>
                                <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[420px] border-border/50 bg-card/95 backdrop-blur-3xl shadow-2xl">
                            <DialogHeader>
                                <DialogTitle className="font-serif text-3xl text-primary mb-2">Formulario de Inscripción</DialogTitle>
                                <DialogDescription className="text-foreground/70">
                                    Completá tus datos para iniciar el proceso de inscripción.
                                </DialogDescription>
                            </DialogHeader>
                            <form className="grid gap-4 py-4" onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get('name');
                                const phone = formData.get('whatsapp');
                                const instagram = formData.get('instagram') || 'No especificado';

                                const message = `¡Hola! Quiero inscribirme a la competencia *Dueto de Almas*.\n\n*Mis Datos:*\n- Nombre: ${name}\n- WhatsApp: ${phone}\n- Instagram: ${instagram}`;
                                const whatsappUrl = `https://wa.me/5492267666550?text=${encodeURIComponent(message)}`;
                                window.open(whatsappUrl, '_blank');
                            }}>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre Completo</label>
                                    <input id="name" name="name" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Ej: Maria Perez" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp</label>
                                    <input id="whatsapp" name="whatsapp" type="tel" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="+54 9 11 1234-5678" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="instagram" className="text-sm font-medium">Instagram <span className="text-xs text-muted-foreground font-normal">(Opcional)</span></label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                                        <input id="instagram" name="instagram" type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent pl-8 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="usuario" />
                                    </div>
                                </div>

                                <button type="submit" className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                                    Enviar Solicitud
                                </button>
                            </form>
                        </DialogContent>
                    </Dialog>

                </motion.div>
            </div>
        </section>
    );
}

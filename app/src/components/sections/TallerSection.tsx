import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function TallerSection() {
    return (
        <section id="practica" className="py-24 bg-background relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.05)] text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-secondary-foreground font-semibold tracking-widest uppercase text-sm mb-4">
                            Preparación
                        </h3>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
                            Práctica y <span className="text-primary italic font-light">Taller</span>
                        </h2>

                        <p className="text-lg md:text-xl text-foreground/80 font-light mb-12 max-w-2xl mx-auto">
                            Preparate para dar lo mejor en la pista. Uníte a nuestro encuentro previo
                            para pulir detalles, sacarte dudas y conectar con otros bailarines antes del gran día.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                <div className="text-primary mb-3 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                </div>
                                <h4 className="font-serif text-xl font-bold mb-1">Día</h4>
                                <p className="text-foreground/70 uppercase tracking-wider text-sm">Lunes 9/02</p>
                            </div>

                            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                <div className="text-primary mb-3 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <h4 className="font-serif text-xl font-bold mb-1">Horario</h4>
                                <p className="text-foreground/70 uppercase tracking-wider text-sm">20:00 HS</p>
                            </div>

                            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                <div className="text-primary mb-3 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <h4 className="font-serif text-xl font-bold mb-1">Lugar</h4>
                                <p className="text-foreground/70 uppercase tracking-wider text-sm">Yrigoyen 2067</p>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="inline-block px-8 py-3 bg-primary text-primary-foreground font-serif tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:bg-primary/90 transition-all duration-300">
                                    Reservar Lugar
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[420px] border-border/50 bg-card/95 backdrop-blur-3xl shadow-2xl">
                                <DialogHeader>
                                    <DialogTitle className="font-serif text-3xl text-primary mb-2">Inscripción al Taller</DialogTitle>
                                    <DialogDescription className="text-foreground/70">
                                        Completá tus datos para asegurar tu lugar en el encuentro previo.
                                    </DialogDescription>
                                </DialogHeader>
                                <form className="grid gap-4 py-4" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const name = formData.get('name');
                                    const phone = formData.get('whatsapp');
                                    const instagram = formData.get('instagram') || 'No especificado';

                                    const message = `¡Hola! Quiero inscribirme al taller y la fecha del 9/02.\n\n*Mis Datos:*\n- Nombre: ${name}\n- WhatsApp: ${phone}\n- Instagram: ${instagram}`;
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
            </div>
        </section>
    );
}

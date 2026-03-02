import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'La Esencia', href: '#esencia' },
        { name: 'Evaluación', href: '#evaluacion' },
        { name: 'Jurados', href: '#jurados' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <a href="#inicio" className="group flex items-center gap-2 z-50">
                    <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-foreground group-hover:text-primary transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        DUETO <span className="text-primary italic font-light">de</span> ALMAS
                    </h1>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#inscripcion"
                        className="ml-4 px-6 py-2.5 rounded-sm border border-primary text-primary font-medium tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                    >
                        INSCRIBIRSE
                    </a>
                    <a
                        href="#practica"
                        className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-primary after:transition-all hover:after:w-full"
                    >
                        Práctica
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </div>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 -z-10"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#inscripcion"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-serif tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                            >
                                Inscribirse
                            </a>
                            <a
                                href="#practica"
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-serif text-2xl text-foreground hover:text-primary transition-colors mt-2"
                            >
                                Práctica
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
}

import type { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
            <Navbar />
            <main className="relative flex flex-col w-full overflow-hidden">
                {children}
            </main>

            <footer className="w-full py-16 px-6 md:px-12 bg-background border-t border-border flex flex-col items-center justify-center z-10 relative text-center">
                <div className="mb-12 flex flex-col items-center">
                    <p className="text-sm tracking-widest uppercase text-foreground/60 mb-6 font-medium">Idea y Dirección General</p>
                    {/* Logo placeholder - the image will have its colors inverted to white to contrast the dark background */}
                    <div className="relative w-64 md:w-80 h-auto p-4 flex items-center justify-center">
                        <img
                            src="/logo-agus-barani.png"
                            alt="Agus Barani - Creadora de Dueto de Almas"
                            className="w-full h-auto object-contain brightness-[3] sepia-[0.3] hue-rotate-[10deg] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all hover:scale-105 duration-500"
                        />
                    </div>
                </div>

                <div className="w-full max-w-4xl border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-muted-foreground text-sm font-light mb-4 md:mb-0">
                        © {new Date().getFullYear()} Dueto de Almas. Todos los derechos reservados.
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/agusbaraani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Instagram</a>
                        <a href="https://wa.me/5492267666550" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">WhatsApp</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

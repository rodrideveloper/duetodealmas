import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play, Plus } from 'lucide-react';
import './Compas.css';

type Props = {
  levels: { name: string; description: string }[];
  criteria: { name: string; description: string }[];
  myths: { myth: string; truth: string }[];
  whatsappHref: string;
};

export default function Compas({ criteria, myths }: Props) {
  const base = import.meta.env.BASE_URL;
  const whatsappHref = `https://wa.me/5492267666550?text=${encodeURIComponent('Hola, quiero información sobre Dueto de Almas 4.0 del 7 de noviembre, a las 20:00 en AB Dance Lab.')}`;
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    element.muted = true;
    element.defaultMuted = true;
    const sync = () => {
      element.autoplay = !preference.matches && !manuallyPaused.current;
      if (preference.matches || manuallyPaused.current) return;
      if (document.visibilityState === 'visible') void element.play().catch(() => setPlaying(false));
    };
    const onPreferenceChange = () => {
      if (preference.matches) element.pause();
      sync();
    };
    sync();
    element.addEventListener('canplay', sync);
    document.addEventListener('visibilitychange', sync);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      element.removeEventListener('canplay', sync);
      document.removeEventListener('visibilitychange', sync);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return <div className="compas">
    <header className="cp-header">
      <a href="#inicio" aria-label="Dueto de Almas, inicio"><img src={`${base}logo-agus-barani.png`} alt="Agus Barani" /></a>
      <span className="cp-header-note">Dueto de Almas 4.0<br />La competencia</span>
      <nav aria-label="Navegación principal"><a href="#propuesta">La experiencia</a><a href="#edicion">7 de noviembre</a><a className="cp-pill" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultar <ArrowUpRight size={17} /></a></nav>
    </header>

    <main>
      <section className="cp-hero cp-cinema" id="inicio" aria-labelledby="cp-title">
          <figure className="cp-background-film" style={{ backgroundImage: `url(${base}ley-hero-poster.jpg)` }}>
            <video ref={video} muted loop playsInline preload="metadata" poster={`${base}ley-hero-poster.jpg`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}><source src={`${base}ley-hero.mp4`} type="video/mp4" /></video>

          </figure>
            <button className="cp-play" aria-label={playing ? 'Pausar video' : 'Reproducir video'} onClick={() => { manuallyPaused.current = playing; if (playing) video.current?.pause(); else void video.current?.play().catch(() => setPlaying(false)); }}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
        <p className="cp-event-date">7 de noviembre <span>· 20:00 hs</span></p>
        <h1 id="cp-title" className="cp-accessible-title">Dueto de Almas 4.0 — La competencia salsera-bachatera</h1>
        <div className="cp-stage">

          <div className="cp-brand-block"><div className="cp-flyer-emblem"><img src={`${base}dueto-4-flyer.jpg`} alt="Logo original Dueto de Almas 4.0, La Competencia: letras blancas y doradas, pareja de baile y aro dorado" /></div><p className="cp-brand-caption">Salsera · Bachatera</p></div>

          <a className="cp-round" href="#edicion"><span>Viví la competencia</span><ArrowDown size={25} /></a>
          <span className="cp-side-label">Técnica / musicalidad / conexión</span>
        </div>
        <div className="cp-hero-foot"><span>AB Dance Lab · Yrigoyen 2067</span><span>Barra / buffet <ArrowDown size={14} /></span></div>
      </section>

      <section className="cp-manifesto" id="propuesta">
        <p className="cp-eyebrow">La experiencia</p>
        <h2>La técnica se aprende.<br />La conexión <em>se siente.</em></h2>
        <div className="cp-manifesto-body"><span className="cp-flower" aria-hidden="true">✳</span><div><p>Dueto de Almas nace del deseo de crear un espacio donde la competencia no opaque al arte. Donde cada movimiento cuenta una historia y cada bailarín deja una parte de su alma en el escenario.</p><p>Imaginate un escenario diseñado para elevar tu performance, con una iluminación que respira con vos y un público que siente cada paso.</p><a className="cp-text-link" href={`${base}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Conocé el reglamento <ArrowUpRight size={18} /></a></div></div>
        <div className="cp-beliefs">{myths.map(item => <details key={item.myth}><summary>{item.myth}<Plus size={20} /></summary><p>{item.truth}</p></details>)}</div>
      </section>

      <section className="cp-score" id="evaluacion"><div><p className="cp-eyebrow">Lo que miramos</p><h2>El baile tiene<br />muchas <em>capas.</em></h2><p>Nuestro panel observa el panorama completo y valora la presencia individual cuando potencia la pieza en conjunto.</p></div><div className="cp-score-list">{criteria.map((item, i) => <details key={item.name} open={i === 0}><summary><span className="cp-score-dot" aria-hidden="true" />{item.name}<Plus size={22} /></summary><p>{item.description}</p></details>)}<a className="cp-text-link" href={`${base}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Descargar reglamento <ArrowUpRight size={18} /></a></div></section>

      <section className="cp-edition" id="edicion"><p className="cp-eyebrow">Dueto de Almas 4.0 · La competencia</p><div className="cp-ticket"><div className="cp-ticket-title"><span>Salsera · Bachatera</span><h2>7 de noviembre.<br /><em>Nos mueve bailar.</em></h2><p>Una noche de salsa, bachata y conexión en AB Dance Lab.</p><a className="cp-pill" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultar por el evento <ArrowUpRight size={18} /></a></div><div className="cp-ticket-dates"><article><span className="cp-ticket-hour">20:00</span><div><h3>La competencia</h3><p>7 de noviembre</p></div></article><article><div><h3>AB Dance Lab</h3><p>Yrigoyen 2067</p><p>Barra / buffet</p></div></article></div></div><div className="cp-event-guests"><span>Nos acompañan</span><p>MDP Reels <b>·</b> DJ Fran Tebes <b>·</b> Lucas Rodriguez</p></div><details className="cp-flyer-details"><summary>Ver el flyer del evento <Plus size={20} /></summary><img src={`${base}dueto-4-flyer.jpg`} alt="Flyer Dueto de Almas 4.0. 7 de noviembre, 20:00. Competencia salsera-bachatera. Barra/buffet. Yrigoyen 2067, AB Dance Lab. Agus Barani, MDP Reels, DJ Fran Tebes y Lucas Rodriguez." loading="lazy" /></details></section>

      <section className="cp-closing" id="contacto"><p className="cp-eyebrow">La próxima historia puede ser la tuya</p><h2>Nos vemos<br /><em>en la pista.</em></h2><a className="cp-round" href={whatsappHref} target="_blank" rel="noopener noreferrer"><span>Hablemos por<br />WhatsApp</span><ArrowUpRight size={30} /></a></section>
    </main>
    <footer className="cp-footer"><img src={`${base}logo-agus-barani.png`} alt="Agus Barani, idea y dirección general" /><span>Idea y dirección general</span><a href="https://www.instagram.com/agusbaraani/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><small>© {new Date().getFullYear()} Dueto de Almas · <a href="mailto:rodrigo.desarrollador@gmail.com">Desarrollo: Rodrigo</a></small></footer>
  </div>;
}

import { regulationsHref } from './lib/event-links';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Heart, Medal, Pause, Play, Plus, Sparkles, Star, Swords, TicketCheck, Trophy } from 'lucide-react';
import './Compas.css';

type Props = {
  levels: { name: string; description: string }[];
  criteria: { name: string; description: string }[];
  myths: { myth: string; truth: string }[];
  whatsappHref: string;
};

const registrationHref = 'https://salao.com.ar/SyB/2025/php/control-Entradas-E01/control-E6/VentaEntradas.html';
const judges = [
  { name: 'China Merelle', image: 'china-merelle', role: 'Jueza · Bailarina y docente' },
  { name: 'Aylu Bossi', image: 'aylu-bossi', role: 'Jueza · Bailarina y docente' },
  { name: 'Ale Abello', image: 'ale-abello', role: 'Juez · Bailarín y docente' },
];

function Ornament({ motif, className = '' }: { motif: 'destellos' | 'cinta' | 'orbita' | 'dueto' | 'flor' | 'abanico' | 'ritmo' | 'constelacion'; className?: string }) {
  return <svg className={`cp-ornament ${className}`} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <use href={`${import.meta.env.BASE_URL}ornaments.svg#${motif}`} />
  </svg>;
}

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
      <nav aria-label="Navegación principal"><a href="#propuesta">La experiencia</a><a href="#premios">Premios</a><a href="#jurado">Jurado</a><a href="#edicion">7 de noviembre</a><a href="#inscripcion">Inscripciones</a><a className="cp-pill cp-registration-button" href={registrationHref} target="_blank" rel="noopener noreferrer">Inscribirme <ArrowUpRight size={17} aria-hidden="true" /></a></nav>
    </header>

    <main>
      <section className="cp-hero cp-cinema" id="inicio" aria-labelledby="cp-title">
          <figure className="cp-background-film" style={{ backgroundImage: `url(${base}ley-hero-poster.jpg)` }}>
            <video ref={video} muted loop playsInline preload="metadata" poster={`${base}ley-hero-poster.jpg`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}><source src={`${base}ley-hero.mp4`} type="video/mp4" /></video>

          </figure>
            <button className="cp-play" aria-label={playing ? 'Pausar video' : 'Reproducir video'} onClick={() => { manuallyPaused.current = playing; if (playing) video.current?.pause(); else void video.current?.play().catch(() => setPlaying(false)); }}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
        <Ornament motif="destellos" className="cp-ornament-hero" />
        <p className="cp-event-date">7 de noviembre <span>· 20:00 hs</span></p>
        <h1 id="cp-title" className="cp-accessible-title">Dueto de Almas 4.0 — La competencia salsera-bachatera</h1>
        <div className="cp-stage">

          <div className="cp-brand-block"><div className="cp-flyer-emblem"><img src={`${base}dueto-4-flyer.jpg`} alt="Logo original Dueto de Almas 4.0, La Competencia: letras blancas y doradas, pareja de baile y aro dorado" /></div><p className="cp-brand-caption">Salsera · Bachatera</p></div>

          <a className="cp-round" href={registrationHref} target="_blank" rel="noopener noreferrer"><span>Quiero inscribirme</span><ArrowUpRight size={25} aria-hidden="true" /></a>
          <span className="cp-side-label">Técnica / musicalidad / conexión</span>
        </div>
        <div className="cp-hero-foot"><span>AB Dance Lab · Yrigoyen 2067</span><span>Barra / buffet <ArrowDown size={14} /></span></div>
      </section>

      <section className="cp-prizes" id="premios" aria-labelledby="cp-prizes-title">
        <Ornament motif="constelacion" className="cp-ornament-prizes" />
        <div className="cp-prizes-heading">
          <p className="cp-eyebrow">Premios · Dueto de Almas 4.0</p>
          <h2 id="cp-prizes-title">Tu baile<br /><em>tiene premio.</em></h2>
        </div>
        <div className="cp-prizes-main">
          <div className="cp-prizes-total">
            <p className="cp-prizes-amount">$200.000</p>
            <p className="cp-prizes-caption">en premios</p>
          </div>
          <div className="cp-prizes-emblem" aria-hidden="true">
            <span>Dueto de Almas</span>
            <Trophy size={74} strokeWidth={1} />
            <span>La competencia · 4.0</span>
          </div>
        </div>
        <ul className="cp-prizes-extras" aria-label="Además, los premios incluyen">
          <li><Trophy size={28} strokeWidth={1.4} aria-hidden="true" /><span>Trofeo</span></li>
          <li><Medal size={28} strokeWidth={1.4} aria-hidden="true" /><span>Medalla</span></li>
          <li><TicketCheck size={28} strokeWidth={1.4} aria-hidden="true" /><span>Inscripción paga<small>Para la próxima competencia</small></span></li>
        </ul>
        <div className="cp-highlights" aria-labelledby="cp-highlights-title">
          <div className="cp-highlights-heading">
            <p className="cp-eyebrow">Reconocimientos especiales</p>
            <h3 id="cp-highlights-title">Destacados<Ornament motif="flor" className="cp-ornament-inline" /></h3>
            <p>Cuatro reconocimientos para celebrar lo que pasa en la pista.</p>
          </div>
          <ul className="cp-highlights-list">
            <li><Star size={25} strokeWidth={1.4} aria-hidden="true" /><span>Competidor revelación</span></li>
            <li><Sparkles size={25} strokeWidth={1.4} aria-hidden="true" /><span>Competidor más creativo</span></li>
            <li><Swords size={25} strokeWidth={1.4} aria-hidden="true" /><span>Mejor batalla</span></li>
            <li><Heart size={25} strokeWidth={1.4} aria-hidden="true" /><span>Premio esencia</span></li>
          </ul>
        </div>
        <div className="cp-prizes-footer">
          <p>Traé tu pasión. Dejá tu huella en la pista.</p>
          <a className="cp-pill cp-prizes-cta" href={registrationHref} target="_blank" rel="noopener noreferrer">Quiero inscribirme <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="cp-registration" id="inscripcion" aria-labelledby="cp-registration-title">
        <Ornament motif="cinta" className="cp-ornament-registration" />
        <div className="cp-registration-copy">
          <p className="cp-eyebrow">Inscripciones · Dueto de Almas 4.0</p>
          <h2 id="cp-registration-title">Tu lugar está<br /><em>en la pista.</em></h2>
          <p>Inscribite de forma individual como leader o follower. No necesitás venir con pareja: se forman por sorteo en cada ronda.</p>
          <div className="cp-registration-workshop">
            <p className="cp-eyebrow">Taller previo incluido</p>
            <h3>Aprendé con<br /><em>los tres jurados.</em></h3>
            <p>Tu inscripción también incluye un taller con los tres jurados para seguir explorando la conexión y la musicalidad antes de la competencia.</p>
          </div>
          <p className="cp-registration-event">7 de noviembre · 20:00 hs<br />AB Dance Lab · Yrigoyen 2067</p>
        </div>
        <div className="cp-registration-action">
          <p className="cp-eyebrow">Inscripción individual</p>
          <p className="cp-registration-price">$30.000</p>
          <p className="cp-registration-includes">Competencia + taller previo con los tres jurados</p>
          <p className="cp-registration-deadline"><span>Cierre de inscripción</span><time dateTime="2026-11-04">Miércoles 4 de noviembre</time></p>
          <a className="cp-pill cp-registration-button" href={registrationHref} target="_blank" rel="noopener noreferrer">Quiero inscribirme <ArrowUpRight size={22} aria-hidden="true" /></a>
          <p className="cp-registration-note">Continuás en Salao.<br />El enlace se abre en una pestaña nueva.</p>
          <a className="cp-text-link" href={regulationsHref} target="_blank" rel="noopener noreferrer">Ver el reglamento <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="cp-text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">¿Tenés dudas? Escribinos <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="cp-manifesto" id="propuesta">
        <Ornament motif="dueto" className="cp-ornament-manifesto" />
        <p className="cp-eyebrow">La experiencia</p>
        <h2>La técnica se aprende.<br />La conexión <em>se siente.</em></h2>
        <div className="cp-manifesto-body">
          <div>
            <p>Dueto de Almas es una competencia de bachata en pareja que tiene como objetivo principal tener mejores bailes sociales, más amables y más conectados.</p>
            <p>Esta competencia tiene como propósito <strong>salvar canciones</strong> y no dar bailes por perdidos.</p>
            <p>Busca integrar más la música y la creatividad individual y con un otro.</p>
            <a className="cp-text-link" href={regulationsHref} target="_blank" rel="noopener noreferrer">Conocé el reglamento <ArrowUpRight size={18} /></a>
          </div>
          <blockquote className="cp-manifesto-quote">
            <p>Como creadora de esta competencia, busco al mejor leader y al mejor follower, pero no por todo lo que puedan hacer, sino por todo lo que puedan sentir.</p>
            <p>En esta competencia se evalúa más allá de la vista…</p>
            <footer>Agus Barani <span>· Creadora de Dueto de Almas</span></footer>
          </blockquote>
        </div>
        <div className="cp-beliefs"><h3 className="cp-beliefs-title">Mitos vs Verdades</h3>{myths.map(item => <details key={item.myth}><summary>{item.myth}<Plus size={20} /></summary><p>{item.truth}</p></details>)}</div>
      </section>

      <section className="cp-score" id="evaluacion"><div><p className="cp-eyebrow">Lo que miramos</p><h2>Esto es lo que<br />el jurado va a <em>evaluar.</em></h2><p>Nuestro panel observa el panorama completo y valora la presencia individual cuando potencia la pieza en conjunto.</p></div><div className="cp-score-list">{criteria.map((item, i) => <details key={item.name} open={i === 0}><summary><span className="cp-score-dot" aria-hidden="true" />{item.name}<Plus size={22} /></summary><p>{item.description}</p></details>)}<a className="cp-text-link" href={regulationsHref} target="_blank" rel="noopener noreferrer">Ver reglamento <ArrowUpRight size={18} /></a></div></section>

      <section className="cp-judges" id="jurado" aria-labelledby="cp-judges-title">
        <Ornament motif="abanico" className="cp-ornament-judges" />
        <div className="cp-judges-heading">
          <div><p className="cp-eyebrow">Tres miradas, una misma conexión</p><h2 id="cp-judges-title">Conocé<br /><em>al jurado.</em></h2></div>
          <div><p>Bailarines y docentes que acompañan esta edición desde la conexión, la musicalidad y la creatividad.</p><a className="cp-text-link" href="#inscripcion">Taller previo con los tres incluido <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </div>
        <div className="cp-judges-gallery">
          {judges.map(judge => <figure className="cp-judge" key={judge.image}>
            <img
              src={`${base}jurado/${judge.image}-600.webp`}
              srcSet={`${base}jurado/${judge.image}-360.webp 360w, ${base}jurado/${judge.image}-600.webp 600w`}
              sizes="(max-width: 760px) 160px, 28vw"
              width={600}
              height={800}
              alt={`Retrato de ${judge.name}`}
              loading="lazy"
              decoding="async"
            />
            <figcaption><p>{judge.role}</p><h3>{judge.name}</h3></figcaption>
          </figure>)}
        </div>
      </section>

      <section className="cp-edition" id="edicion"><p className="cp-eyebrow">Dueto de Almas 4.0 · La competencia</p><div className="cp-ticket"><div className="cp-ticket-title"><span>Salsera · Bachatera</span><h2>7 de noviembre.<br /><em>Nos mueve bailar.</em></h2><p>Una noche de salsa, bachata y conexión en AB Dance Lab.</p><a className="cp-pill" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultar por el evento <ArrowUpRight size={18} /></a></div><div className="cp-ticket-dates"><article><span className="cp-ticket-hour">20:00</span><div><h3>La competencia</h3><p>7 de noviembre</p></div></article><article><div><h3>AB Dance Lab</h3><p>Yrigoyen 2067</p><p>Barra / buffet</p></div></article></div></div><div className="cp-event-guests"><span>Nos acompañan</span><p>MDP Reels <b>·</b> DJ Fran Tebes <b>·</b> Lucas Rodriguez</p></div><details className="cp-flyer-details"><summary>Ver el flyer del evento <Plus size={20} /></summary><img src={`${base}dueto-4-flyer.jpg`} alt="Flyer Dueto de Almas 4.0. 7 de noviembre, 20:00. Competencia salsera-bachatera. Barra/buffet. Yrigoyen 2067, AB Dance Lab. Agus Barani, MDP Reels, DJ Fran Tebes y Lucas Rodriguez." loading="lazy" /></details></section>

      <section className="cp-closing" id="contacto"><Ornament motif="orbita" className="cp-ornament-closing-orbit" /><Ornament motif="ritmo" className="cp-ornament-closing-rhythm" /><p className="cp-eyebrow">La próxima historia puede ser la tuya</p><h2>Nos vemos<br /><em>en la pista.</em></h2><a className="cp-round" href={registrationHref} target="_blank" rel="noopener noreferrer"><span>Quiero<br />inscribirme</span><ArrowUpRight size={30} aria-hidden="true" /></a><a className="cp-text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultas por WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a></section>
    </main>
    <footer className="cp-footer"><img src={`${base}logo-agus-barani.png`} alt="Agus Barani, idea y dirección general" /><span>Idea y dirección general</span><a href="https://www.instagram.com/agusbaraani/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><small>© {new Date().getFullYear()} Dueto de Almas · <a href="mailto:rodrigo.desarrollador@gmail.com">Desarrollo: Rodrigo</a></small></footer>
  </div>;
}

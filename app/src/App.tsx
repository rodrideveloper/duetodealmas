import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, Trophy, X } from 'lucide-react';
import './App.css';
import Compas from './Compas';

const navLinks = [
  { label: 'La propuesta', href: '#propuesta' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Evaluación', href: '#evaluacion' },
  { label: 'Jurado', href: '#jurado' },
  { label: 'Edición 2026', href: '#edicion' },
];

const levels = [
  { name: 'Principiante', description: 'Tus primeros pasos en el escenario.' },
  { name: 'Intermedio', description: 'Desafiando tus límites técnicos.' },
  { name: 'Avanzado', description: 'Maestría y expresión total.' },
];

const criteria = [
  { name: 'Conexión', description: 'Sinergia entre ambos, comunicación no verbal y complementariedad fluida.' },
  { name: 'Interpretación musical', description: 'Interpretación del ritmo, fraseo musical y matices dinámicos.' },
  { name: 'Tiempo', description: 'Precisión y ejecución de los movimientos en el tiempo y compás correspondiente.' },
  { name: 'Estilo', description: 'Expresión personal, postura, movimiento corporal y actitud en la pista.' },
];

const judges = [
  { image: 'aylen_bossi.jpeg', name: 'Aylu Bossi', alt: 'Retrato de Aylu Bossi' },
  { image: 'sebas_martinez.jpeg', name: 'Sebas Martinez', alt: 'Retrato de Sebas Martinez' },
  { image: 'china_merelle.jpeg', name: 'Antonella Merelle', alt: 'Retrato de Antonella Merelle, China Merelle' },
];

const myths = [
  { myth: '“Es solo para profesionales”', truth: 'Hay categorías para todos los niveles: Principiante, Intermedio y Avanzado.' },
  { myth: '“Solo importa la técnica”', truth: 'La musicalidad, la conexión y la presencia escénica también cuentan.' },
  { myth: '“Es una competencia fría”', truth: 'Es un espacio de comunidad, aprendizaje y energía compartida.' },
];

const whatsappHref = `https://wa.me/5492267666550?text=${encodeURIComponent('Hola, quiero recibir información sobre la próxima edición de Dueto de Almas.')}`;

function KineticPoster() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>('.hero-video');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncMotionPreference = () => {
      if (!video) return;
      if (reducedMotion.matches) video.pause();
      else void video.play().catch(() => undefined);
    };

    syncMotionPreference();
    reducedMotion.addEventListener('change', syncMotionPreference);
    return () => reducedMotion.removeEventListener('change', syncMotionPreference);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Dueto de Almas, inicio">
          DUETO <span>de</span> ALMAS
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="nav-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Próxima edición <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">Una competencia de danza en pareja</p>
              <h1 id="hero-title"><span>DUETO</span><span><i>de</i> ALMAS<span className="hero-period">.</span></span></h1>
              <div className="hero-caption">
                <p>Donde la técnica se encuentra con la pasión.</p>
                <p>Hacé que cada movimiento cuente una historia.</p>
              </div>
              <div className="hero-actions">
                <a className="hero-link" href="#propuesta">Conocé la propuesta <ArrowDown size={15} /></a>
                <span className="hero-edition-note">Principiante · Intermedio · Avanzado</span>
              </div>
            </div>

            <div className="hero-stage">
              <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={`${baseUrl}ley-hero-poster.jpg`} aria-hidden="true">
                <source src={`${baseUrl}ley-hero.mp4`} type="video/mp4" />
              </video>
              <svg className="movement-trace" viewBox="0 0 650 820" aria-hidden="true" preserveAspectRatio="none">
                <path d="M-40 610C118 615 113 363 262 399s120 332 280 254 83-351 144-491" />
                <path d="M22 712c170-47 202-303 337-273s105 256 240 182" />
              </svg>
              <span className="stage-caption">Una pista. Dos cuerpos. Una historia.</span>
              <a className="video-credit" href="https://www.pexels.com/video/a-couple-doing-contemporary-dance-6940538/" target="_blank" rel="noopener noreferrer">
                Video de referencia · Pavel Danilyuk / Pexels
              </a>
            </div>
          </div>
          <a className="hero-scroll" href="#propuesta" aria-label="Desplazarse a la propuesta"><ArrowDown size={17} /></a>
        </section>

        <section className="intro-section section-pad" id="propuesta">
          <div className="intro-title-block">
            <p className="section-note">La propuesta</p>
            <h2 className="display-heading">No es solo<br />bailar<span className="punctuation">.</span><br /><span className="intro-last-line">Es conectar.</span></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lede">Dueto de Almas nace del deseo de crear un espacio donde la competencia no opaque al arte.</p>
            <p>Un lugar donde cada movimiento cuenta una historia y cada bailarín deja una parte de su alma en el escenario.</p>
            <p>Imaginate un escenario diseñado para elevar tu performance, con una iluminación que respira con vos y un público que siente cada paso.</p>
            <a className="text-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Leer el reglamento completo <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="belief-section" aria-label="Mitos y verdades">
          <div className="belief-heading"><span>La competencia, de cerca</span><h2>Tres ideas<br />para dejar atrás.</h2></div>
          <div className="belief-list">
            {myths.map((item) => (
              <article className="belief-item" key={item.myth}>
                <p className="belief-myth">{item.myth}</p>
                <p className="belief-truth">{item.truth}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="levels-section section-pad" id="categorias">
          <div className="levels-intro">
            <p className="section-note">Un escenario para cada camino</p>
            <h2 className="display-heading">Cada cuerpo<br />llega <span>a su tiempo.</span></h2>
            <p>La propuesta incluye categorías para distintos momentos del recorrido de cada bailarín.</p>
          </div>
          <div className="level-list">
            {levels.map((level) => (
              <article className="level-item" key={level.name}>
                <h3>{level.name}</h3>
                <p>{level.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="criteria-section section-pad" id="evaluacion">
          <div className="criteria-heading">
            <p className="section-note">El sistema</p>
            <h2 className="display-heading">La técnica también<br />sabe <span>escuchar.</span></h2>
            <div className="criteria-copy">
              <p>Nuestro panel de jurados observa el panorama completo. Valoramos la presencia individual siempre y cuando sirva para potenciar la pieza en conjunto.</p>
              <a className="text-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Descargar reglamento <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="criteria-list">
            {criteria.map((item) => (
              <article className="criterion" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="judges-section section-pad" id="jurado">
          <div className="judges-copy">
            <p className="section-note">Invitados especiales</p>
            <h2 className="display-heading">La mirada que<br />reconoce <span>el alma.</span></h2>
            <p>Referentes y maestros que acompañan a cada pareja y evalúan la danza desde la técnica, la musicalidad y la conexión.</p>
          </div>
          <div className="judge-gallery">
            {judges.map((judge, index) => (
              <figure className={`judge-card judge-card-${index + 1}`} key={judge.name}>
                <div className="judge-image-wrap"><img src={`${baseUrl}${judge.image}`} alt={judge.alt} loading="lazy" /></div>
                <figcaption><span>Jurado invitado</span><h3>{judge.name}</h3></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="edition-section section-pad" id="edicion">
          <div className="edition-heading">
            <p className="section-note">Edición publicada · 2026</p>
            <h2 className="display-heading">Lo que pasa<br />en escena <span>queda.</span></h2>
            <p>Estos son los datos que conserva el sitio sobre la edición publicada. Las fechas ya pasaron; escribinos para enterarte cuando se anuncie la próxima.</p>
            <a className="button button-coral" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultar próxima edición <ArrowUpRight size={16} /></a>
          </div>
          <div className="edition-timeline">
            <article className="edition-event">
              <time className="event-date" dateTime="2026-03-04">04 <span>MAR</span></time>
              <div className="event-info"><span className="event-tag">Encuentro previo</span><h3>Práctica y taller</h3><p>Un espacio para pulir detalles, sacarte dudas y conectar con otros bailarines antes de salir a la pista.</p><p>Miércoles 4 de marzo · 20:00 hs<br />Yrigoyen 2067</p></div>
              <span className="event-state">Realizado</span>
            </article>
            <article className="edition-event">
              <time className="event-date" dateTime="2026-04-04">04 <span>ABR</span></time>
              <div className="event-info"><span className="event-tag">Competencia</span><h3>Dueto de Almas</h3><p>4 de abril de 2026</p><a className="text-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Reglamento completo <ArrowUpRight size={14} /></a></div>
              <span className="event-state">Realizada</span>
            </article>
          </div>
        </section>

        <section className="closing-section" id="contacto">
          <div className="closing-mark" aria-hidden="true"><span /><span /></div>
          <p className="section-note">La próxima historia puede ser la tuya</p>
          <h2>El movimiento<br />nos encuentra.</h2>
          <a className="button button-paper" href={whatsappHref} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <img src={`${baseUrl}logo-agus-barani.png`} alt="Agus Barani, creadora de Dueto de Almas" loading="lazy" />
            <span>Idea y dirección general</span>
          </div>
          <a className="footer-wordmark" href="#inicio">DUETO <span>de</span> ALMAS</a>
          <div className="footer-socials">
            <a href="https://www.instagram.com/agusbaraani/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a>
            <a href="https://wa.me/5492267666550" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dueto de Almas. Todos los derechos reservados.</span><span>Sitio desarrollado por <a href="mailto:rodrigo.desarrollador@gmail.com">rodrigo.desarrollador@gmail.com</a></span></div>
      </footer>
    </div>
  );
}

type DesignConcept = 'afiche' | 'archivo' | 'solar' | 'ceremonia' | 'velada' | 'pista' | 'compas';

function ConceptPreview({ variant }: { variant: Exclude<DesignConcept, 'afiche'> }) {
  const baseUrl = import.meta.env.BASE_URL;
  const isSolar = variant === 'solar';
  const isCeremony = variant === 'ceremonia';
  const isVelada = variant === 'velada';
  const isPista = variant === 'pista';
  const usesOfficialLogo = isCeremony || isVelada || isPista;
  const hidesJudges = isCeremony || isVelada || isPista;

  return (
    <div className={`alternative concept-${variant}`}>
      <header className="alt-header">
        <a className={`alt-brand${usesOfficialLogo ? ' ceremony-brand' : ''}`} href="#inicio">{usesOfficialLogo && <img src={`${baseUrl}logo-agus-barani.png`} alt="Agus Barani" />}<span>DUETO <i>de</i> ALMAS</span></a>
        <nav aria-label="Navegación principal">
          <a href="#propuesta">La propuesta</a>
          <a href="#categorias">Niveles</a>
          {!hidesJudges && <a href="#jurado">Jurado</a>}
        </nav>
        <a className="alt-contact-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Próxima edición <ArrowUpRight size={14} /></a>
      </header>

      <main>
        <section className="alt-hero" id="inicio">
          {(isCeremony || isVelada || isPista) && <div className={`${isCeremony ? 'ceremony' : isVelada ? 'velada' : 'pista'}-backdrop`} aria-hidden="true" />}
          <div className={`alt-hero-copy${isCeremony ? ' ceremony-hero-copy' : isVelada ? ' velada-hero-copy' : isPista ? ' pista-hero-copy' : ''}`}>
            <p className="alt-overline">Competencia de danza en pareja</p>
            {(isCeremony || isVelada || isPista) && <p className={isCeremony ? 'ceremony-edition' : isVelada ? 'velada-edition' : 'pista-edition'}>Salsa & bachata · competencia</p>}
            <h1><span>Dueto</span><i>de</i><span>Almas</span></h1>
            <p className="alt-lede">{isCeremony ? 'Donde cada historia encuentra su escenario.' : isVelada ? 'Un encuentro donde el baile cuenta lo que las palabras no dicen.' : isPista ? 'La conexión también se coreografía.' : 'Donde la técnica se encuentra con la pasión.'}</p>
            <p>{isCeremony ? 'Una celebración del movimiento, la conexión y la música.' : isVelada ? 'Salsa, bachata y una pista para compartir.' : isPista ? 'Un certamen donde cada pareja convierte la música en una obra propia.' : 'Hacé que cada movimiento cuente una historia.'}</p>
            <a className="alt-button" href="#propuesta">{isCeremony ? 'Descubrir la experiencia' : isVelada ? 'Conocer la propuesta' : isPista ? 'Entrar a la pista' : 'Explorar la propuesta'} <ArrowDown size={15} /></a>
            {isCeremony && <p className="ceremony-date-note">La próxima edición se anuncia pronto</p>}
            {isVelada && <div className="velada-facts"><div><span>04 MAR · 20:00</span><strong>Encuentro previo</strong></div><div><span>04 ABR · 2026</span><strong>Competencia</strong></div><small>Edición publicada · fechas realizadas</small></div>}
            {isPista && <p className="pista-note">Salsa · Bachata · Encuentro</p>}
          </div>
          <div className={`alt-hero-media${isCeremony ? ' ceremony-hero-media' : isVelada ? ' velada-hero-media' : isPista ? ' pista-hero-media' : ''}`}>
            <video autoPlay muted loop playsInline preload="metadata" poster={`${baseUrl}ley-hero-poster.jpg`} aria-hidden="true">
              <source src={`${baseUrl}ley-hero.mp4`} type="video/mp4" />
            </video>
            <span className="alt-media-note">{isSolar ? 'Dos cuerpos, un mismo pulso' : isCeremony ? 'La danza nos reúne' : isVelada ? 'Un escenario para encontrarnos' : isPista ? 'Una historia hecha movimiento' : 'Estudio de movimiento · 2026'}</span>
            <a className="alt-video-credit" href="https://www.pexels.com/video/a-couple-doing-contemporary-dance-6940538/" target="_blank" rel="noopener noreferrer">Video de referencia · Pexels</a>
          </div>
          <span className={`alt-hero-mark${isCeremony ? ' ceremony-hero-mark' : isVelada ? ' velada-hero-mark' : isPista ? ' pista-hero-mark' : ''}`} aria-hidden="true">{isCeremony ? <Trophy /> : isSolar ? '✳' : isVelada ? '✦' : isPista ? '✧' : 'D / A'}</span>
        </section>

        <section className="alt-statement" id="propuesta">
          <p className="alt-overline">La propuesta</p>
          <h2>No es solo bailar.<br /><span>Es conectar.</span></h2>
          <div className="alt-statement-copy">
            <p>Dueto de Almas nace del deseo de crear un espacio donde la competencia no opaque al arte. Un lugar donde cada movimiento cuenta una historia y cada bailarín deja una parte de su alma en el escenario.</p>
            <p>Imaginate un escenario diseñado para elevar tu performance, con una iluminación que respira con vos y un público que siente cada paso.</p>
            <a className="alt-inline-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Leer el reglamento completo <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="alt-myths" aria-label="Mitos y verdades">
          <h2>Lo que la danza<br />nos enseña.</h2>
          <div className="alt-myth-list">
            {myths.map((item) => <article key={item.myth}><h3>{item.myth}</h3><p>{item.truth}</p></article>)}
          </div>
        </section>

        <section className="alt-levels section-pad" id="categorias">
          <div className="alt-section-heading"><p className="alt-overline">Un escenario para cada camino</p><h2>Encontrá tu<br />propio <span>ritmo.</span></h2><p>Hay categorías para cada momento del recorrido.</p></div>
          <div className="alt-level-list">{levels.map((level) => <article key={level.name}><h3>{level.name}</h3><p>{level.description}</p></article>)}</div>
        </section>

        <section className="alt-criteria section-pad" id="evaluacion">
          <div className="alt-section-heading"><p className="alt-overline">El sistema</p><h2>La técnica<br />también <span>escucha.</span></h2><p>Nuestro panel observa el panorama completo y valora la presencia individual cuando potencia la pieza en conjunto.</p><a className="alt-inline-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Descargar reglamento <ArrowUpRight size={14} /></a></div>
          <div className="alt-criteria-list">{criteria.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.name}</h3><p>{item.description}</p></article>)}</div>
        </section>

        {!hidesJudges && <section className="alt-judges section-pad" id="jurado">
          <div className="alt-section-heading"><p className="alt-overline">Invitados especiales</p><h2>La mirada<br />que reconoce.</h2><p>Referentes y maestros que evalúan a cada pareja desde la técnica, la musicalidad y la conexión.</p></div>
          <div className="alt-judge-list">{judges.map((judge, index) => <figure key={judge.name}><div className="alt-judge-image"><img src={`${baseUrl}${judge.image}`} alt={judge.alt} loading="lazy" /></div><figcaption><span>Jurado invitado · 0{index + 1}</span><h3>{judge.name}</h3></figcaption></figure>)}</div>
        </section>}

        <section className="alt-edition section-pad" id="edicion">
          <div className="alt-section-heading"><p className="alt-overline">Edición publicada · 2026</p><h2>Una fecha.<br />Muchas <span>historias.</span></h2><p>Las fechas de esta edición ya pasaron. Escribinos para enterarte cuando se anuncie la próxima.</p><a className="alt-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">Consultar próxima edición <ArrowUpRight size={15} /></a></div>
          <div className="alt-events">
            <article><time dateTime="2026-03-04">04 <span>MAR</span></time><div><p>Encuentro previo</p><h3>Práctica y taller</h3><p>Para pulir detalles, sacarte dudas y conectar con otros bailarines antes de salir a la pista.</p><p>Miércoles 4 de marzo · 20:00 hs<br />Yrigoyen 2067</p></div><span className="alt-event-state">Realizado</span></article>
            <article><time dateTime="2026-04-04">04 <span>ABR</span></time><div><p>Competencia</p><h3>Dueto de Almas</h3><p>4 de abril de 2026</p><a className="alt-inline-link" href={`${baseUrl}reglamento.pdf`} target="_blank" rel="noopener noreferrer">Reglamento completo <ArrowUpRight size={14} /></a></div><span className="alt-event-state">Realizada</span></article>
          </div>
        </section>

        <section className="alt-closing" id="contacto"><p className="alt-overline">La próxima historia puede ser la tuya</p><h2>El movimiento<br />nos encuentra.</h2><a className="alt-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <ArrowUpRight size={15} /></a></section>
      </main>

      <footer className="alt-footer"><img src={`${baseUrl}logo-agus-barani.png`} alt="Agus Barani, creadora de Dueto de Almas" loading="lazy" /><span>Idea y dirección general</span><a href="https://www.instagram.com/agusbaraani/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={13} /></a><a href="https://wa.me/5492267666550" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} /></a><small>© {new Date().getFullYear()} Dueto de Almas · Sitio desarrollado por <a href="mailto:rodrigo.desarrollador@gmail.com">rodrigo.desarrollador@gmail.com</a></small></footer>
    </div>
  );
}

function ConceptSwitcher({ active }: { active: DesignConcept }) {
  if (!import.meta.env.DEV) return null;
  const baseUrl = import.meta.env.BASE_URL;
  const concepts: Array<{ id: DesignConcept; label: string; href: string }> = [
    { id: 'afiche', label: 'Afiche', href: `${baseUrl}#inicio` },
    { id: 'archivo', label: 'Archivo', href: `${baseUrl}?concept=archivo#inicio` },
    { id: 'solar', label: 'Solar', href: `${baseUrl}?concept=solar#inicio` },
    { id: 'ceremonia', label: 'Ceremonia', href: `${baseUrl}?concept=ceremonia#inicio` },
    { id: 'velada', label: 'Velada', href: `${baseUrl}?concept=velada#inicio` },
    { id: 'pista', label: 'Pista', href: `${baseUrl}?concept=pista#inicio` },
    { id: 'compas', label: 'Compás', href: `${baseUrl}?concept=compas#inicio` },
  ];

  return <nav className="concept-switcher" aria-label="Cambiar concepto de diseño"><span>Probar diseño</span>{concepts.map((concept) => <a key={concept.id} href={concept.href} aria-current={active === concept.id ? 'page' : undefined}>{concept.label}</a>)}</nav>;
}

function App() {
  const requestedConcept = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('concept') : null;
  const active: DesignConcept = requestedConcept === 'archivo' || requestedConcept === 'solar' || requestedConcept === 'ceremonia' || requestedConcept === 'velada' || requestedConcept === 'pista' || requestedConcept === 'compas' ? requestedConcept : 'compas';

  return <><ConceptSwitcher active={active} />{active === 'afiche' ? <KineticPoster /> : active === 'compas' ? <Compas levels={levels} criteria={criteria} myths={myths} whatsappHref={whatsappHref} /> : <ConceptPreview variant={active} />}</>;
}

export default App;

import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { EsenciaSection } from './components/sections/EsenciaSection';
import { EvaluacionSection } from './components/sections/EvaluacionSection';
import { TallerSection } from './components/sections/TallerSection';
import { InscripcionSection } from './components/sections/InscripcionSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <EsenciaSection />
      <EvaluacionSection />
      <TallerSection />
      <InscripcionSection />
    </Layout>
  );
}

export default App;

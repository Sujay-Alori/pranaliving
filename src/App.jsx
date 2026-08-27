import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetail from './pages/Projects/ProjectDetail';
import EnergyPage from './pages/Energies/EnergyPage';

function getRoute() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('energy/')) {
    return { page: 'energy', id: hash.replace('energy/', '') };
  }
  if (hash.startsWith('project/')) {
    return { page: 'project', id: hash.replace('project/', '') };
  }
  if (hash === 'projects') return { page: 'projects' };
  return { page: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    function onHashChange() {
      setRoute(getRoute());
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((page, id) => {
    if (page === 'energy') {
      window.location.hash = `energy/${id}`;
    } else if (page === 'project') {
      window.location.hash = `project/${id}`;
    } else if (page === 'projects') {
      window.location.hash = 'projects';
    } else {
      window.location.hash = '';
    }
  }, []);

  return (
    <>
      <Header onNavigate={navigate} currentRoute={route} />
      <main>
        {route.page === 'home' && <Home onNavigate={navigate} />}
        {route.page === 'projects' && (
          <ProjectsPage onNavigate={navigate} />
        )}
        {route.page === 'project' && (
          <ProjectDetail projectId={route.id} onNavigate={navigate} />
        )}
        {route.page === 'energy' && (
          <EnergyPage energyId={route.id} onNavigate={navigate} />
        )}
      </main>
      <Footer />
    </>
  );
}

import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetail from './pages/Projects/ProjectDetail';
import EnergyPage from './pages/Energies/EnergyPage';
import CategoryPage from './pages/Category/CategoryPage';
import FloorPlansPage from './pages/FloorPlans/FloorPlansPage';

function getRoute() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('energy/')) {
    return { page: 'energy', id: hash.replace('energy/', '') };
  }
  if (hash.startsWith('project/')) {
    return { page: 'project', id: hash.replace('project/', '') };
  }
  if (hash.startsWith('category/')) {
    return { page: 'category', id: hash.replace('category/', '') };
  }
  if (hash === 'projects') return { page: 'projects' };
  if (hash === 'floor-plans') return { page: 'floorPlans' };
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

  useEffect(() => {
    if (route.page === 'category' || route.page === 'home' || route.page === 'floorPlans') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [route]);

  const navigate = useCallback((page, id) => {
    if (page === 'energy') {
      window.location.hash = `energy/${id}`;
    } else if (page === 'project') {
      window.location.hash = `project/${id}`;
    } else if (page === 'projects') {
      window.location.hash = 'projects';
    } else if (page === 'category') {
      window.location.hash = `category/${id}`;
    } else if (page === 'floorPlans') {
      window.location.hash = 'floor-plans';
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
        {route.page === 'category' && (
          <CategoryPage categoryId={route.id} onNavigate={navigate} />
        )}
        {route.page === 'floorPlans' && (
          <FloorPlansPage onNavigate={navigate} />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}

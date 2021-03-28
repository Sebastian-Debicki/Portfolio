import React, { useState, useEffect } from 'react';

import * as config from './core/config';
import { Header } from './containers/Header';
import { About } from './containers/About';
import { Projects } from './containers/Projects';
import { Contact } from './containers/Contact';
import { Logo } from './common/components/Logo';
import { HamburgerButton } from './common/components/HamburgerButton';
import { Navigation } from './common/components/Navigation';
import { Backdrop } from './common/components/Backdrop';
import { Modal } from './common/components/Modal';
import { ProjectView } from './common/components/ProjectView';
import { Spinner } from './common/components/Spinner';
import { projects } from './common/data/projects';
import { technologies } from './common/data/technologies';
import { Project } from './common/models/Project';

export const App = () => {
  const [project, setProject] = useState<Project | undefined>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), config.LOADING_TIME);
  }, []);

  return (
    <>
      {loading && <Spinner loadingTime={config.LOADING_TIME} />}
      <Logo />
      <HamburgerButton
        toggleMenuHandler={() => setMenuOpen(!menuOpen)}
        open={menuOpen}
      />
      <Navigation open={menuOpen} closeMenuHandler={() => setMenuOpen(false)} />
      {menuOpen && (
        <Backdrop
          onClose={() => setMenuOpen(false)}
          backdropName="navigation"
        />
      )}
      {project && (
        <Modal onClose={() => setProject(undefined)}>
          <ProjectView project={project} />
        </Modal>
      )}

      <main className="layout">
        <Header loadingTime={config.LOADING_TIME} />
        <About technologies={technologies} loading={loading} />
        <Projects
          openModalHandler={(project) => setProject(project)}
          projects={projects}
        />
        <Contact />
      </main>
    </>
  );
};

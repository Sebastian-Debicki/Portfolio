import React from 'react';

import useAppState from './hooks/useAppState';
import { Header } from './containers/Header/Header';
import { About } from './containers/About/About';
import { Projects } from './containers/Projects/Projects';
import { Contact } from './containers/Contact/Contact';
import { Logo } from './common/components/Logo';
import { HamburgerButton } from './common/components/HamburgerButton';
import { Navigation } from './common/components/Navigation';
import { Backdrop } from './common/components/Backdrop';
import { Modal } from './common/components/Modal';
import { ProjectView } from './common/components/ProjectView';
import { Spinner } from './common/components/Spinner';

export const App = () => {
  const {
    projects,
    technologies,
    project,
    menuOpen,
    modalOpen,
    loading,
    loadingTimer,
    toggleMenuHandler,
    closeMenuHandler,
    openModalHandler,
    closeModalHandler,
  } = useAppState();

  return (
    <>
      {loading && <Spinner loadingTimer={loadingTimer} />}
      <Logo />
      <HamburgerButton toggleMenuHandler={toggleMenuHandler} open={menuOpen} />
      <Navigation open={menuOpen} closeMenuHandler={closeMenuHandler} />
      {menuOpen && (
        <Backdrop onClose={closeMenuHandler} backdropName="navigation" />
      )}
      {modalOpen && (
        <Modal onClose={closeModalHandler}>
          <ProjectView project={project} />
        </Modal>
      )}

      <main className="layout">
        <Header loadingTimer={loadingTimer} />
        <About technologies={technologies} loading={loading} />
        <Projects openModalHandler={openModalHandler} projects={projects} />
        <Contact />
      </main>
    </>
  );
};

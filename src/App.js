import React from 'react';
import Header from './containers/Header/Header';
import Logo from './components/UIElements/Logo/Logo';
import HamburgerButton from './components/UIElements/HamburgerButton/HamburgerButton';
import Navigation from './components/Navigation/Navigation';
import About from './containers/About/About';
import Backdrop from './components/UIElements/Backdrop/Backdrop';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Modal from './components/UIElements/Modal/Modal';
import ProjectView from './components/ProjectView/ProjectView';
import useAppState from './hooks/useAppState';
import Spinner from './components/UIElements/Spinner/Spinner';

const App = () => {
  const {
    projects,
    technologies,
    project,
    menuOpen,
    modalOpen,
    loading,
    toggleMenuHandler,
    closeMenuHandler,
    openModalHandler,
    closeModalHandler,
  } = useAppState();

  return (
    <>
      {loading && <Spinner />}
      <Logo />
      <HamburgerButton toggleMenuHandler={toggleMenuHandler} open={menuOpen} />
      <Navigation open={menuOpen} closeMenuHandler={closeMenuHandler} />
      {menuOpen && <Backdrop onClose={closeMenuHandler} backdropName="navigation" />}
      {modalOpen && (
        <Modal onClose={closeModalHandler}>
          <ProjectView project={project} />
        </Modal>
      )}
      <main className="layout">
        <Header />
        <About technologies={technologies} loading={loading} />
        <Projects openModalHandler={openModalHandler} projects={projects} />
        <Contact />
      </main>
    </>
  );
};

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppState = () => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [project, setProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleMenuHandler = () => setMenuOpen(!menuOpen);
  const closeMenuHandler = () => setMenuOpen(false);
  const openModalHandler = (project) => {
    setModalOpen(true);
    setProject(project);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
    setProject(null);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/skills`)
      .then((res) => res)
      .then((resData) => {
        setTechnologies(resData.data.skills);
      });
  }, []);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data.projects));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return {
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
  };
};

export default useAppState;

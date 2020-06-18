import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppState = () => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [project, setProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingTimer, setLoadingTimer] = useState(1000);
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
    const loadingTimerStart = Date.now();
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/skills`)
      .then((res) => res)
      .then((resData) => {
        setTechnologies(resData.data.skills);
        setLoadingTimer(Date.now() - loadingTimerStart + 1000);
        setTimeout(() => {
          setLoading(false);
        }, 1400);
      });
  }, []);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data.projects));
  }, []);

  return {
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
  };
};

export default useAppState;

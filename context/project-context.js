import { createContext } from 'react';

// createContext correspond à la forme que les consommateurs attendent !
const ProjectContext = createContext({
  projects: [],
  technologies: [],
  selectedTechnology: '',
});

export default ProjectContext;

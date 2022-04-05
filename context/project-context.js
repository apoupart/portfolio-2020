import { createContext } from 'react';

// createContext correspond à la forme que les consommateurs attendent !
const ProjectContext = createContext({
  projects: [],
  originalProjects: [],
  technologies: [],
});

export default ProjectContext;

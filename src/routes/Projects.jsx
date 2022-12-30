import ListPriority from '../components/ListPriority';
import ProjectNav from '../components/ProjectNav';
import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        const response = await fetch('./json/projects.json');
        setProjects(await response.json());
    }

    useEffect(() => {
      fetchProjects();
    });

  return (
    <div>
      <ProjectNav />
      <h1>Featured Projects</h1>
      <ListPriority projects={projects} />
    </div>
  )
}

export default Projects;
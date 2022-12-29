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
      <ListProjects projects={projects} />
    </div>
  )
}

function ListProjects({ projects }) {
  return (
    <hgroup>
      <h1>My Projects</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: '1rem'
      }}>
        {
          projects.map(project => (
            <article key={project.id}>
              <header>
                <img height='20px' src={`img/${project.slug}`} alt={project.name} />
              </header>
              <h6>{project.name}</h6>
              <p>{project.description}</p>
              <button>Read more</button><button>See it</button>
            </article>
          ))
        }
      </div>
    </hgroup>
  )
}

export default Projects;
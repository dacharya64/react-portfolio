import React from 'react';
import Card from './Card';

function ListAllResearch({ projects }) {
  return (
      <div className="grid">
        {
          projects.filter(allProjects => allProjects.tag == "research").map(project => (
            <Card project={project}/>
          ))
        }
      </div>
  )
}

export default ListAllResearch;
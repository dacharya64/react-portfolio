import React from 'react';
import Card from './Card';

function ListPriority({ projects }) {
  return (
      <div className="grid">
        {
          projects.filter(allProjects => allProjects.priority == true).map(project => (
            <Card project={project}/>
          ))
        }
      </div>
  )
}

export default ListPriority;
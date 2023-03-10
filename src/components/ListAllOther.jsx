import React from 'react';
import Card from './Card';

function ListAllOther({ projects }) {
  return (
      <div className="grid">
        {
          projects.filter(allProjects => allProjects.tag == "other").map(project => (
            <Card project={project}/>
          ))
        }
      </div>
  )
}

export default ListAllOther;
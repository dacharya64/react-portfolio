import React, { useEffect, useState } from 'react';
import Card from './Card';

function ListAllGames({ projects }) {
  return (
      <div className="grid">
        {
          projects.filter(allProjects => allProjects.tag == "games").map(project => (
            <Card project={project}/>
          ))
        }
      </div>
  )
}

export default ListAllGames;
import React, { useEffect, useState } from 'react';

function ListAllOtherGames({ projects }) {
  return (
      <div>
        {
          projects.map(project => (
            <p key={project.id}><a href={project.url}>{project.name}</a><br/>{project.description}</p>
          ))
        }
      </div>
  )
}

export default ListAllOtherGames;
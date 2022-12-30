import React, { useEffect, useState } from 'react';

function ListAllGames({ projects }) {
  return (
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
                <img src={`img/${project.slug}`} alt={project.name} />
              </header>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <a href="#" role="button" className="outline">Read more</a>
              <a href="#" role="button" className="outline">Play now</a>
            </article>
          ))
        }
      </div>
  )
}

export default ListAllGames;
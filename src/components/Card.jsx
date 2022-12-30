import React, { useEffect, useState } from 'react';

function Card({ project }) {
    return (
        <article className="rounded" key={project.id}>
            <header>
                <img src={`img/${project.slug}`} alt={project.name} />
            </header>
            <h5>{project.name}</h5>
            <p><em>{project.role}</em></p>
            <p>{project.description}</p>
            <a href={project.url} role="button" className="outline">Check it out</a>
        </article>
    )
}

export default Card;
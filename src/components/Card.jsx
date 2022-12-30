import React, { useEffect, useState } from 'react';

function Card({ project }) {
    return (
        <article className="rounded" key={project.id}>
            <header>
                <img src={`img/${project.slug}`} alt={project.name} />
            </header>
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <a href="#" role="button" className="outline">Read more</a>
            <a href="#" role="button" className="outline">Check it out</a>
        </article>
    )
}

export default Card;
import React, { useEffect, useState } from 'react';
import ListAllOtherGames from './ListAllOtherGames';

function OtherGames() {
    const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        const response = await fetch('./json/other_games.json');
        setProjects(await response.json());
    }

    useEffect(() => {
        fetchProjects();
    });

    return (
        <div className="container">
            <h1>Other Games</h1>
            <ListAllOtherGames projects={projects} />
        </div>
    )
}

export default OtherGames;
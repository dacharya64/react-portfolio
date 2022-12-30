import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';
import About from '../components/About';
import Footer from '../components/Footer';
import ListAllGames from '../components/ListAllGames';

function Games() {
    const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        const response = await fetch('./json/games.json');
        setProjects(await response.json());
    }

    useEffect(() => {
        fetchProjects();
    });

    return (
        <div className="container">
            <Nav />
            <About />
            <ProjectNav />
            <ListAllGames projects={projects} />
            <Footer />
        </div>
    )
}

export default Games;
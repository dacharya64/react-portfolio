import React, { useEffect, useState } from 'react';
import ListAllResearch from '../components/ListAllResearch';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';
import About from '../components/About';
import Footer from '../components/Footer';

function Research() {
    const [projects, setProjects] = useState([]);

    async function fetchProjects(path) {
        const response = await fetch('./json/' + path + '.json');
        setProjects(await response.json());
    }

    useEffect(() => {
        fetchProjects("research");
    });

    return (
        <div className="container">
            <Nav />
            <About />
            <ProjectNav />
            <ListAllResearch projects={projects} />
            <Footer />
        </div>
    )
}

export default Research;
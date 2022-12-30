import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';
import About from '../components/About';
import Footer from '../components/Footer';
import ListAllOther from '../components/ListAllOther';

function Other() {
    const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        const response = await fetch('./json/projects.json');
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
            <h1>Other Projects</h1>
            <ListAllOther projects={projects} />
            <Footer />
        </div>
    )
}

export default Other;
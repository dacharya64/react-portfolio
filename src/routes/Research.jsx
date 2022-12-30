import React, { useEffect, useState } from 'react';
import ListAllResearch from '../components/ListAllResearch';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';
import About from '../components/About';
import Footer from '../components/Footer';
import ListPublications from '../components/ListPublications';

function Research() {
    const [projects, setProjects] = useState([]);
    const [publications, setPublications] = useState([]);

    async function fetchProjects(path) {
        const response = await fetch('./json/' + path + '.json');
        setProjects(await response.json());
    }

    async function fetchPublications() {
        const response = await fetch('./json/publications.json'); 
        setPublications(await response.json());
      }

    useEffect(() => {
        fetchProjects("research");
        fetchPublications();
    });

    return (
        <div className="container">
            <Nav />
            <About />
            <ProjectNav />
            <h1>Research Projects</h1>
            <ListAllResearch projects={projects} />
            <ListPublications publications={publications} />
            <Footer />
        </div>
    )
}

export default Research;
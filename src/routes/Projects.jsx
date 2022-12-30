import ListAllGames from '../components/ListAllGames';
import ListAllResearch from '../components/ListAllResearch';
import ProjectNav from '../components/ProjectNav';
import React, { useEffect, useState } from 'react';

function Projects() {
  const [research, setResearch] = useState([]);
  const [games, setGames] = useState([]);

    async function fetchResearch() {
        const response = await fetch('./json/research.json');
        setResearch(await response.json());
    }

    async function fetchGames() {
      const response = await fetch('./json/games.json');
      setGames(await response.json());
  }

    useEffect(() => {
      fetchResearch();
      fetchGames();
    });

  return (
    <div>
      <ProjectNav />
      <h1>Featured Projects</h1>
      <ListAllResearch projects={research} />
      <ListAllGames projects={games} />
    </div>
  )
}

export default Projects;
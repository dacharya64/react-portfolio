import React, { useEffect, useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ListPublications from '../components/ListPublications';

function Publications() {
  const [publications, setPublications] = useState([]);

  async function fetchPublications() {
    const response = await fetch('./json/publications.json'); 
    setPublications(await response.json());
  }

  useEffect(() => {
    fetchPublications();
  });

  return (
    <>
      <div className="container">
        <Nav />
        <About />
        <ListPublications publications={publications} />
        <Footer />
      </div>
    </>
  )
}

export default Publications;
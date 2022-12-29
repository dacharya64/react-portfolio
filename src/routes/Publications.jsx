import React, { useEffect, useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

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

function ListPublications({ publications }){
    return (
      <hgroup>
      <h1>My Publications</h1>
      <div>
        {
          publications.map(publication => (
            <p key={publication.id}><a href={publication.url}>{publication.name}</a><br/>{publication.authors}<br/>{publication.venue}, {publication.year}</p>
          ))
        }
      </div>
      </hgroup>
    )
}

export default Publications;
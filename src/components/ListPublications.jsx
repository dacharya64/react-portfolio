import React from 'react';

function ListPublications({ publications }){
    return (
      <hgroup>
      <h1>Publications</h1>
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

export default ListPublications;
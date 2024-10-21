import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import ExhibitionRoom from './ExhibitionRoom';

const Gallery = () => {
  const [numRooms, setNumRooms] = useState(3);
  const artworks = [
    [{ id: 1, title: '1', image: '/5144796.jpg' }, { id: 2, title: '2', image: '/gato.jpg' }, { id: 3, title: '3' }],
    [{ id: 3, title: 'Obra 3' }],
    [{ id: 4, title: 'Obra 4' }, { id: 5, title: 'Obra 5' }]
  ];


  

  return (
    <div>
      <button onClick={() => setNumRooms(numRooms + 1)}>Agregar Sala</button>
      <button onClick={() => setNumRooms(numRooms > 1 ? numRooms - 1 : 1)}>Quitar Sala</button>

      {Array.from({ length: numRooms }).map((_, index) => (
        <ExhibitionRoom key={index} artworks={artworks[index] || []} />
      ))}
    </div>
  );
};

export default Gallery;
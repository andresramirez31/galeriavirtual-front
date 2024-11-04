import React, { useEffect, useState } from 'react'; 
import ExhibitionRoom from './ExhibitionRoom';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [numRooms, setNumRooms] = useState(3);
  const [obras, setObras] = useState([]);
  const navigate = useNavigate();
  const artworks = [
    [{ id: 1, title: '1', image: '/5144796.jpg' }, { id: 2, title: '2', image: '/gato.jpg' }, { id: 3, title: '3' }],
    [{ id: 3, title: 'Obra 3' }],
    [{ id: 4, title: 'Obra 4' }, { id: 5, title: 'Obra 5' }]
  ];

  useEffect(() => {
    fetch('http://localhost:8080/api/obras')
      .then((response) => response.json())
      .then((data) => setObras(data))
      .catch((error) => console.error('Error fetching obras:', error));
    }, []);

  const handleSubmit = async (e) => {
    
  
    console.log(obras)

  };


  

  return (
    <div>
      <button onClick={() => setNumRooms(numRooms + 1)}>Agregar Sala</button>
      <button onClick={() => setNumRooms(numRooms > 1 ? numRooms - 1 : 1)}>Quitar Sala</button>

      {Array.from({ length: numRooms }).map((_, index) => (
        <ExhibitionRoom key={index} artworks={artworks[index] || []} />
      ))}

      <div>
      <button onClick={() => handleSubmit()}>Mostrar obras consola</button>
      </div>
    </div>
  );
};

export default Gallery;
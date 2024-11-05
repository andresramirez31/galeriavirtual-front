import React, { useEffect, useState } from 'react'; 
import ExhibitionRoom from './ExhibitionRoom';
import { useNavigate } from 'react-router-dom';


const Gallery = () => {
  const [numRooms, setNumRooms] = useState(3);
  const [obras, setObras] = useState([]);
  const navigate = useNavigate();
  const artworks = [
    obras,
    [{ id: 1, title: '1', image: '/5144796.jpg' }, { id: 2, title: '2', image: '/gato.jpg' }, { id: 3, title: '3' }],
    [{ id: 3, title: 'Obra 3' }],
    [{ id: 4, title: 'Obra 4' }, { id: 5, title: 'Obra 5' }]
  ];


  useEffect(() => {
    // Fetch the obra documents from the backend API
    const fetchObras = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/obras'); // Adjust to your endpoint
            const data = await response.json();

            // Process the data, filtering out obras with null imageData
            const processedObras = data
                .filter(obra => obra.imageData !== null) // Filter out documents with null imageData
                .map((obra, index) => ({
                    id: index + 1, // Assign an incremental id
                    title: obra.nombre || 'Title not available',
                    image: `data:image/jpeg;base64,${obra.imageData}` // Convert image data to Base64 string
                }));

            setObras(processedObras);
        } catch (error) {
            console.error('Error fetching obras:', error);
        }
    };

    fetchObras();
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
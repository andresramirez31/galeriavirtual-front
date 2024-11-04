import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Plane, useTexture, Text } from '@react-three/drei';

const Artwork = ({ image, position, title, onClick, onShowImage }) => {
  const texture = useTexture(image || '/default.jpg'); // Usa una imagen por defecto si no hay imagen

  return (
    <group position={position} onClick={onClick}>
      <mesh>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial map={texture} />  {/* Aplica la textura a la obra */}
      </mesh>
      {/* Agrega el texto del título al lado de la obra */}
      <Text 
        position={[2.5, 0, 0]}  // Ajusta la posición para que esté al lado derecho
        fontSize={1.5} 
        color="white" 
        anchorX="left" 
        anchorY="middle"
      >
        {title}
      </Text>
      {/* Botón para mostrar la imagen en pantalla completa */}
      <mesh position={[4.5, 0, 0]} onClick={onShowImage}>
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <Text 
        position={[5.5, 0, 0]} 
        fontSize={0.5} 
        color="white" 
        anchorX="left" 
        anchorY="middle"
      >
        ver
      </Text>
    </group>
  );
};

// Componente para la pared
const Wall = () => {
  const wallTexture = useTexture('/pared.jpg'); // Asegúrate de que la ruta es correcta

  return (
    <>
      <Box args={[1, 5, 50]} position={[-25, 1.5, 0]}>
        <meshStandardMaterial map={wallTexture} /> {/* Aplica la textura a la pared */}
      </Box>
      <Box args={[1, 5, 50]} position={[25, 1.5, 0]}>
        <meshStandardMaterial map={wallTexture} /> {/* Aplica la textura a la pared */}
      </Box>
      <Box args={[50, 5, 1]} position={[0, 1.5, -25]}>
        <meshStandardMaterial map={wallTexture} /> {/* Aplica la textura a la pared */}
      </Box>
    </>
  );
};

const ExhibitionRoom = ({ artworks }) => {
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10]);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada
  const [selectedHeight, setSelectedHeight] = useState(0); // Estado para la altura de la obra seleccionada

  const handleArtworkClick = (position, height) => {
    // Mueve la cámara hacia la obra al hacer clic
    setCameraPosition([position[0], position[1] + 2, position[2] + 5]); // Ajusta la posición según sea necesario
    setSelectedHeight(height); // Establece la altura de la obra seleccionada
  };

  const handleShowImage = (image) => {
    setSelectedImage(image); // Establece la imagen seleccionada
  };

  const handleCloseImage = () => {
    setSelectedImage(null); // Cierra la imagen
  };

  return (
    <>
      <div style={styles.container}>
        <Canvas camera={{ position: cameraPosition, fov: 50 }} style={styles.canvas}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} />

          {/* Controles de órbita sin limitaciones */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
          />

          {/* Suelo */}
          <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} args={[50, 50]}>
            <meshStandardMaterial color="lightgrey" />
          </Plane>

          {/* Paredes */}
          <Wall /> {/* Agrega el componente Wall aquí */}

          {/* Techo */}
          <Box args={[50, 1, 50]} position={[0, 5, 0]}>
            <meshStandardMaterial color="lightgrey" />
          </Box>

          {/* Obras de arte */}
          {artworks.map((artwork, index) => (
            <Artwork
              key={artwork.id}
              image={artwork.image}  // Pasa la URL de la imagen al componente
              position={[-20 + index * 10, 2, -24]}  // Posición de cada obra
              title={artwork.title} // Pasa el título de la obra
              onClick={() => handleArtworkClick([-20 + index * 10, 2, -24], 2)} // Maneja el clic y pasa la altura
              onShowImage={() => handleShowImage(artwork.image)} // Maneja el clic en el botón
            />
          ))}
        </Canvas>

        {/* Ventana flotante para mostrar la imagen */}
        {selectedImage && (
          <div style={{ ...styles.overlay, top: `${selectedHeight * 100}px` }} onClick={handleCloseImage}>
            <img src={selectedImage} alt="Artwork" style={styles.image} />
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    width: '100%',        // Ajusta el ancho del contenedor
    height: '0',          // Inicialmente sin altura
    paddingBottom: '133.33%', // Mantiene la proporción 3:4
    position: 'relative', // Posicionamiento relativo para el contenedor
  },
  canvas: {
    position: 'absolute', // Posiciona el canvas absolutamente dentro del contenedor
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'fixed',
    left: '50%',          // Centra horizontalmente
    transform: 'translateX(-50%)', // Ajusta para centrar
    width: '90%',         // Mantiene el tamaño
    maxHeight: '90%',     // Mantiene el tamaño
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    cursor: 'pointer',
  },
};

export default ExhibitionRoom;

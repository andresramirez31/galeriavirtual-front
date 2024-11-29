import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Plane, useTexture, Text } from '@react-three/drei';
import { useRole } from '../context/role_context';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { RoundedBox } from 'three-stdlib';



// Componente para la obra de arte (Artwork)
const Artwork = ({ image, position, rotation, title, reactions, onDeleteClick, onClick, onShowImage, onOpenModal }) => {
  const texture = useTexture(image || '/default.jpg'); // Asegúrate de que la ruta de la imagen sea válida

  // Definir las reacciones (emojis)
  const reactionSymbols = ['😊', '❤️', '👏', '🔥']; 

  return (
    <group position={position} rotation={rotation} onClick={onClick}>
      <mesh>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        position={[-2, -2.5, 0]} // Ajustamos la posición del texto título
        fontSize={0.5}
        color="white"
        anchorX="middle"
        anchorY="middle"
      >
        {title}
      </Text>
      <mesh position={[4.5, 0, 0]} onClick={onShowImage}>
        <boxGeometry args={[1.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#3ebdac" />
      </mesh>
      <Text
        position={[3.9, 0, 0.06]} // Posición de "ver"
        fontSize={0.28}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        Expandir
      </Text>



      {/* Botón Nota encima de "ver" */}
      <mesh position={[4.5, 0.7, 0]} onClick={onOpenModal}>
        {/* Caja del botón con bordes redondeados */}
        <boxGeometry args={[1.5, 0.5, 0.1]} />
        <meshStandardMaterial color="green" />
      </mesh>


      {/* Texto dentro del botón */}
      <Text
        position={[4.5, 0.7, 0.06]} // Ajustado para que el texto esté centrado dentro del botón
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Calificar 🌟
      </Text>

      {/* Botón Nota encima de "ver" */}
      <mesh position={[4.5, 1.5, 0]} onClick={onDeleteClick}>
        {/* Caja del botón con bordes redondeados */}
        <boxGeometry args={[1.5, 0.5, 0.1]} />
        <meshStandardMaterial color="red" />
      </mesh>


      {/* Texto dentro del botón */}
      <Text
        position={[4.5, 1.5, 0.06]} // Ajustado para que el texto esté centrado dentro del botón
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Eliminar
      </Text>


      {/* Cuadro con las reacciones */}
      <group position={[5, -1.5, 0]}>
        <mesh>
        <boxGeometry args={[4.3, 0.9, 0.1]} />
          <meshStandardMaterial color="#a9e4dc" />
        </mesh>
        <group position={[-0.6, 0, 0.06]}>
          {reactionSymbols.map((symbol, index) => (
            <Text
              key={index}
              position={[-1 + index * 1.1, 0, 0]}
              fontSize={0.6}
              color="black"
              onClick={() => alert(`Reacción seleccionada: ${symbol}`)} // Mostrar reacción al hacer clic
              anchorX="center"
              anchorY="middle"
            >
              {symbol}
            </Text>
          ))}
        </group>
      </group>
    </group>
  );
};

// Componente para la pared (Wall)
const Wall = ({wall}) => {
  const wallTexture = useTexture(wall); // Verifica que la ruta sea correcta

  return (
    <>
      <Box args={[1, 5, 50]} position={[-25, 1.5, 0]}>
        <meshStandardMaterial map={wallTexture} />
      </Box>
      <Box args={[1, 5, 50]} position={[25, 1.5, 0]}>
        <meshStandardMaterial map={wallTexture} />
      </Box>
      <Box args={[50, 5, 1]} position={[0, 1.5, -25]}>
        <meshStandardMaterial map={wallTexture} />
      </Box>
    </>
  );
};

// Componente para la ventana emergente de calificación
const RatingModal = ({ isOpen, onClose, onSave }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(rating, comment);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Deja tu calificación</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Calificación (0-10)"
            style={styles.input}
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comentario"
            style={styles.textarea}
          />
          <div style={styles.buttons}>
            <button type="submit" style={styles.button}>Guardar</button>
            <button type="button" onClick={onClose} style={styles.button}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const deleteObra = async (id) => {
  const confirmDelete = window.confirm("Esta seguro de eliminar esta obra?");
  if (!confirmDelete) return;

  try {
    const response = await fetch(`http://localhost:8080/api/obras/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert("La obra ha sido eliminada.");
      // Optionally remove the deleted obra from the local state
      
    } else {
      const error = await response.text();
      alert(`Error: ${error}`);
    }
  } catch (error) {
    console.error("Error eliminando la obra:", error);
    alert("Error eliminando la obra, intente de nuevo.");
  }
};

// Componente principal para la sala de exposición (ExhibitionRoom)
const ExhibitionRoom = ({ artworks }) => {
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageScale, setImageScale] = useState(1); // Estado para manejar el tamaño de la imagen
  const [idOriginalObra1, setIdOriginalObra] = useState("");
  const [fondo, setFondo] = useState("/pared.jpg");
  const { role } = useRole();

  const handleArtworkClick = (position) => {
    setCameraPosition([position[0], position[1] + 2, position[2] + 5]);
  };

  const handleShowImage = (image) => {
    setCurrentImage(image);  // Almacenamos la imagen que se quiere ampliar
  };

  const handleOpenModal = (id) => {
    setIdOriginalObra(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveRating = async (nota, comentario) => {
    
    if(!role){
      alert(`No tiene permisos para evaluar`);
    } else {

      switch(role.role){
        case "evaluador": {
          alert(`Calificación guardada: ${nota}\nComentario: ${comentario}`);
          const idOriginalObra = idOriginalObra1
          const response = await fetch('http://localhost:8080/api/obras/comentarios', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({idOriginalObra, nota, comentario}),
          });
          if(response.ok){
            handleCloseModal();
          } else {
            alert('Error al guardar');
          }
          break;
        }
        default:
          alert(`No tiene permisos para evaluar`);

      }
    }
    

    
  };

  const handleScaleChange = (scale) => {
    setImageScale(scale);
  };

  const handleResetScale = () => {
    setImageScale(1); // Restaurar el tamaño inicial
  };

  const handleCloseImage = () => {
    setCurrentImage(null); // Cerrar la imagen ampliada
  };

  return (
    <div style={styles.container}>
      <label style={styles.backgroundLabel}>Cambiar Fondo de galeria</label>
        <select
          value={fondo} 
          onChange={(e) => setFondo(e.target.value)} 
          required 
        >
          {/* Modificar por imagenes de pared */} 
          <option value="/pared.jpg">Pared 1</option>
          <option value="/pared2.jpg">Pared 2</option>
          <option value="/pared3.jpg">Pared 3</option>
          <option value="/pared4.jpg">Pared 4</option>
        </select>

      


      <Canvas camera={{ position: cameraPosition, fov: 50 }} style={styles.canvas}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} args={[50, 50]}>
          <meshStandardMaterial color="lightgrey" />
        </Plane>
        <Wall wall={fondo} />
        {artworks.map((artwork, index) => {
          // Parámetros de distribución
          const spaceBetween = 9.5; // Espacio entre las obras
          const maxPerWall = 5; // Número máximo de obras por pared

          // Cálculo de la posición y rotación según la pared
          let position = [0, 2, 0]; // Posición predeterminada
          let rotation = [0, 0, 0]; // Rotación predeterminada

          if (index < maxPerWall) {
            // Pared del fondo (mirando al frente)
            position = [-21 + index * spaceBetween, 2, -24];
          } else if (index < 2 * maxPerWall) {
            // Pared de la izquierda (mirando hacia el interior)
            position = [-24, 2, -15 + (index - maxPerWall) * spaceBetween];
            rotation = [0, Math.PI / 2, 0]; // Girar 90° en el eje Y
          } else if (index < 3 * maxPerWall) {
            // Pared de la derecha (mirando hacia el interior)
            position = [24, 2, -20 + (index - 2 * maxPerWall) * spaceBetween];
            rotation = [0, -Math.PI / 2, 0]; // Girar -90° en el eje Y
          }

          return(
          <Artwork
            key={artwork.id}
            image={artwork.image}
            position={position}
            title={artwork.title}
            onClick={() => handleArtworkClick(position)}
            onShowImage={() => handleShowImage(artwork.image)}
            onOpenModal={() => handleOpenModal(artwork.idOriginal)}
            onDeleteClick={() => deleteObra(artwork.idOriginal)}
            rotation={rotation}
          />
          );
        })}
      </Canvas>

      {/* Ventana emergente de calificación */}
      <RatingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveRating}
      />
      {/* Imagen ampliada si existe una */}
      {currentImage && (
        <div style={styles.imageModal}>
          <img 
            src={currentImage} 
            alt="Imagen Ampliada" 
            style={{ ...styles.expandedImage, transform: `scale(${imageScale})` }} 
          />
          <div style={styles.overlayButtons}>
            <button onClick={() => handleScaleChange(4)} style={styles.scaleButton}>4x</button>
            <button onClick={() => handleScaleChange(8)} style={styles.scaleButton}>8x</button>
            <button onClick={handleResetScale} style={styles.resetButton}>Restaurar</button>
            <button onClick={handleCloseImage} style={styles.closeButton}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos para el modal y la imagen ampliada
const styles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  imageModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
  },
  expandedImage: {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.2s ease',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
  },
  scaleButton: {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  resetButton: {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  overlayButtons: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  backgroundLabel: {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: '#42A89B',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ExhibitionRoom;

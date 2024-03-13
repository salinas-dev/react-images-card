// Importa React y los hooks useState y useRef desde el paquete 'react'.
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';

// Importa el archivo de estilos CSS para este componente.
import './App.css';

// Importa las imágenes desde rutas relativas dentro del proyecto.
import Imagen1 from "../src/image/colibri.png";
import Imagen2 from "../src/image/colibri1.png";
import Imagen3 from "../src/image/image.png";

// Crea un array que contiene información sobre cada imagen.
const imagenes = [
  { id: 1, nombre: 'Colibri azul', image: Imagen1 },
  { id: 2, nombre: 'Post @salinas.dev', image: Imagen2 },
  { id: 3, nombre: 'Butterfly|Mariposa', image: Imagen3 },
];

// Define el componente funcional App.
const App = () => {
  // Declara dos variables de estado y una referencia mutable.
  const [selectedImage, setSelectedImage] = useState(null); // Almacena la imagen seleccionada.
  const imageRef = useRef(); // Referencia mutable al elemento de imagen en el DOM.

  // Función para manejar el clic en una imagen.
  const handleClick = (image) => {
    setSelectedImage(image); // Actualiza la imagen seleccionada.
  };

  // Función para cerrar el modal.
  const handleCloseModal = () => {
    setSelectedImage(null); // Establece la imagen seleccionada como nula.
  };

  // Función para manejar la carga completa de la imagen.
  const handleImageLoad = () => {
    // Actualiza la imagen seleccionada con la resolución de la imagen cargada.
    setSelectedImage((prevImage) => ({
      ...prevImage,
      resolution: `${imageRef.current.naturalWidth}x${imageRef.current.naturalHeight}`,
    }));
  };

  return (
    <div className="container">
      {imagenes.map((image) => (
        <div key={image.id} className="card" onClick={() => handleClick(image)}>
          <img src={image.image} alt={image.nombre} />
        </div>
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.nombre}
              onLoad={handleImageLoad}
              ref={imageRef}
            />
            <h2>{selectedImage.nombre}</h2>
            <p>Resolution: {selectedImage.resolution}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

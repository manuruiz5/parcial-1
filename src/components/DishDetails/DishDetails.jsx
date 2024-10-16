import { useParams, useNavigate } from "react-router-dom"; 
import PropTypes from "prop-types"; 
import styles from "./DishDetails.module.css"; 
import { Link } from "react-router-dom";

const DishDetails = ({ dishes }) => {
  const { id } = useParams(); // Obtiene el parámetro "id" de la URL
  const navigate = useNavigate(); // la navegación

  //Busca la receta con el id correspondiente en la lista de recetas
  const dish = dishes.find((dish) => dish.id === id);

  // Si no se encuentra la receta , muestra un mensaje o redirige
  if (!dish) {
    return <p>La receta no existe o los datos aún no están cargados.</p>; // Muestra mensaje de error si no hay juego olimpico
  }

  return (
    <div className={styles.dishDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Atrás
      </button>
      <h2>{dish.name}</h2> 
      <p>Descripción: {dish.description}</p> 
      <p>Tipo: {dish.type}</p> 
      <p>Preparación: {dish.preparation}</p> 

      <Link to={`/edit-dish/${dish.id}`}> 
        <button className={styles.editButton}>Editar receta</button>
      </Link>
    </div>
  );
};

// Definir PropTypes para validar las props del componente
DishDetails.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      description: PropTypes.string, 
      type: PropTypes.string, 
      preparation: PropTypes.string, 
    })
  ).isRequired,
};

export default DishDetails; // Exporta el componente para su uso en otros archivos

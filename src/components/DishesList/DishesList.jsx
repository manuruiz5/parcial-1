import styles from "./DishesList.module.css"; 
import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom"; 

const DishesList = ({ dishes, deleteDishById }) => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.dishesList}>
      {dishes?.map((dish) => ( // Itera sobre la lista de recetas para renderizarlos
        <div key={dish.id} className={styles.dishBox}> 
          <h3>{dish.name}</h3> 
          <button
            className={styles.detailsButton}
            onClick={() => navigate(`/dishes/details/${dish.id}`)}> 
            Detalles
          </button>
          <button className={styles.deleteButton}
            onClick={() => deleteDishById(dish.id)}>
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
};

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // El ID 
      name: PropTypes.string.isRequired, //  título 
      description: PropTypes.string, // La descripción 
      type: PropTypes.string, // players
      preparation: PropTypes.string, // Las categorías 
    })
  ).isRequired,
  deleteDishById: PropTypes.func.isRequired, 
};

export default DishesList; // Exporta el componente por defecto

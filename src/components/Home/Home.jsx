import { Link } from "react-router-dom"; 
import PropTypes from "prop-types"; 
import DishesList from "../DishesList/DishesList";
import styles from "./Home.module.css"; 

const Home = ({ dishes, deleteDishById }) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Recetas</h2> 
      <Link to="/agregar"> 
        <button className={styles.addButton}>Agregar receta</button> 
      </Link>
      
      <DishesList dishes={dishes} deleteDishById={deleteDishById} /> 
    </div>
  );
};

// Validación de los tipos de las props
Home.propTypes = {
  dishes: PropTypes.arrayOf( 
    PropTypes.shape({ 
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired,
      description: PropTypes.string, 
      type: PropTypes.string, 
      preparation: PropTypes.string, 
    })
  ).isRequired, 
  deleteDishById: PropTypes.func.isRequired, 
};

export default Home; // Exporta el componente para ser usado en otros archivos

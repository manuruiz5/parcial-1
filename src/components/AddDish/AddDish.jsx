import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import PropTypes from "prop-types"; 
import styles from "./AddDish.module.css"; 

const AddDish = ({ onAddDish }) => {
  const [name, setName] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [type, setType] = useState(""); 
  const [preparation, setPreparation] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto del formulario
    const newDish = { name, description, type, preparation }; //Crea un objeto con los datos dela receta
    onAddDish(newDish);
    navigate("/"); //Vuelve a la página de inicio 
  };

  return (
    <div className={styles.addDishContainer}> 
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Atrás
      </button>
      <h2>Agregar nueva receta</h2> 
      <form onSubmit={handleSubmit}> 
        <div className={styles.formGroup}>
          <label>Nombre:</label> 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Actualiza el estado del nombre
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Descripción:</label> 
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Tipo:</label> 
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Preparación:</label> 
          <input
            type="text"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Agregar receta</button> 
      </form>
    </div>
  );
};

//Validación de props
AddDish.propTypes = {
  onAddDish: PropTypes.func.isRequired, 
};

export default AddDish; // Exporta el componente   para su uso en otros archivos

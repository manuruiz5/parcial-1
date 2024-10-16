import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EditDish.module.css"; 

const EditDish = ({ dishes, onUpdateDish }) => {
  const { dishId } = useParams(); 
  const navigate = useNavigate();
  const dishToEdit = dishes.find(dish => dish.id === dishId);

  const [name, setName] = useState(dishToEdit?.name || "");
  const [description, setDescription] = useState(dishToEdit?.description || "");
  const [type, setType] = useState(dishToEdit?.type || "");
  const [preparation, setPreparation] = useState(dishToEdit?.preparation || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDish = { name, description, type, preparation };
    onUpdateDish(dishId, updatedDish);
    navigate("/"); 
  };

  return (
    <div className={styles.editDishContainer}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Atrás
      </button>
      <h2>Editar juego</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label>Preparación::</label>
          <input
            type="text"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Guardar cambios</button>
      </form>
    </div>
  );
};

// Validación de props
EditDish.propTypes = {
  dishes: PropTypes.array.isRequired,
  onUpdateDish: PropTypes.func.isRequired,
};

export default EditDish;

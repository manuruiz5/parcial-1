import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DishDetails from "./components/DishDetails/DishDetails";
import AddDish from "./components/AddDish/AddDish";
import EditDish from "./components/EditDish/EditDish"; 

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  // GET all dishes
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch("http://localhost:3000/dishes");
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

 // GET a dish by ID
 const fetchDishById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/dishes/${id}`);
    const data = await response.json();
    setSelectedDish(data[0]); 
  } catch (error) {
    console.error("Error fetching dish by ID:", error);
  }
};

 // POST a new dish
 const addDish = async (newDish) => {
  try {
    const response = await fetch("http://localhost:3000/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDish),
    });
    const data = await response.json();
    setDishes(data);
  } catch (error) {
    console.error("Error adding new dish:", error);
  }
};

// DELETE a dish 
const deleteDishById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id));
    
    } else {
      console.error('Error deleting dish');
    }
  } catch (error) {
    console.error("Error deleting dish:", error);
  }
};

// PUT (update) a dish 
const updateDishById = async (id, updatedDish) => {
  try {
    const response = await fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDish),
    });
    if (response.ok) {
      const data = await response.json();
      setDishes(data); // Actualiza la lista de juegos con la respuesta
    } else {
      console.error('Error updating dish');
    }
  } catch (error) {
    console.error("Error updating dish:", error);
  }
};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dishes={dishes}  deleteDishById={deleteDishById}  />} />
        <Route path="/dishes/details/:id" element={<DishDetails dishes={dishes} fetchDishById={fetchDishById} selectedDish={selectedDish}  />} />
        <Route path="/agregar" element={<AddDish onAddDish={addDish} />} />
        <Route path="/edit-dish/:dishId" element={<EditDish dishes={dishes} onUpdateDish={updateDishById} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

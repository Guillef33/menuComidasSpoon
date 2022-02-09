import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

function AppProvider(props) {
  const [state, setState] = useState({});

  const [menu, setMenu] = useState([]);

  const [platosBusqueda, setPlatosBusqueda] = useState([]);
  const [input, setInput] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [onClose, setOnClose] = useState(false);
  // const [state, setState] = useContext(AppContext);

  useEffect(() => {
    searchProducts();
  }, []);

  const searchProducts = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&number=10&query=${input}&intolerances="gluten&number=4"` // buscamos con intolerancia al gluten
      // ` https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&cuisine=american`
    );
    const data = await response.json();
    console.log(data.results);
    setPlatosBusqueda(data.results);
    console.log(platosBusqueda);
  };

  const handleOnChange = (el) => {
    console.log(el.target.value);
    let query = el.target.value;
    setInput(query);
  };

  const addMenu = (newMenu) => {
    //usar un filter para validar si menu tiene 4 items veganos
    //condición general de evitar que se sumen más de 8 platos (if)
    setMenu( [...menu, newMenu] );
  
  }




  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        platosBusqueda,
        setPlatosBusqueda,
        input,
        setInput,
        menu,
        setMenu,
        handleOnChange,
        searchProducts,
        showModal,
        setShowModal,
        onClose,
        setOnClose,
        addMenu
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;

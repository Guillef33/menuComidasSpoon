import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

function AppProvider(props) {

  const [state, setState] = useState({});
  // const [platosBusqueda, setPlatosBusqueda] = useState([]);
  // const [input, setInput] = useState("");
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;

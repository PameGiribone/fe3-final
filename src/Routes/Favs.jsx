import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistaState } from "../Context/Context";
import Button from "../Components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Favs = () => {
  const { state, dispatch } = useDentistaState();
  
  useEffect(() => {
    const favoritosString = localStorage.getItem('favoritos') || [];
      if (favoritosString) {
        const favoritos = JSON.parse(favoritosString);      
      dispatch({ type: "SET_FAVORITOS", payload: favoritos });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
  }, [state.favoritos]);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">      
        {state.favoritos.map(fav => (          
            <Card item={fav} key={fav.id}>
              <Button className="favDelete" onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: fav })}>
              <FontAwesomeIcon icon={faXmark} style={{color: "#eb051c", height: "20px"}} />
              </Button>
            </Card>   
        ))}
      </div>
    </> 
  )
};

export default Favs;

import React from "react";
import { Link } from "react-router-dom";



const Card = ({ item, children }) => {
  const {name, username, id} = item;
  return (
    <div className="card">           
        <img className="img-doctor" src="/public/images/doctor.jpg" alt="doctor" />
        <Link to={'/detail/' +item.id}>
          <h5>{name}</h5>
          <p>{username}</p>
          <p>{id}</p>
        </Link>
        {children}
    </div>
  );
};

export default Card;

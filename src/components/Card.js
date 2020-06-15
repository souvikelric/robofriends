import React from "react";
import "./Card.css";

const app = ({ name, email, id }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default app;

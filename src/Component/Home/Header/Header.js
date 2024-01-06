import React from "react";
import sHeader from "./Header.module.css";
import Body from "../Body/Body";
import bike from "../../../Images/bike.jpg";

export default function Header() {
  return (
    <div>
      <img
        src={bike}
        alt="Not Found"
        style={{ width: "100vw", height:"120vh",position: "relative" }}
      />
      <h1 style={{position:"absolute",top:400,color:"white",inlineSize:"20rem"}}>PUSHING THE BOUNDRIES</h1>
      <h1 style={{position:"absolute",top:500,right:100,color:"white",inlineSize:"25rem"}}>OF TECHNOLOGIES AND DESIGN</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          width: "100vw",
        }}
      >
        <div>
          <h1 style={{color:"white"}}>LOGO</h1>
        </div>
        <div style={{ display: "flex" }}>
          <h4>BIKES</h4>
          <h4>CYPHER</h4>
          <h4>ACCESSORIES</h4>
          <h4>RIDE-ELECTRIC</h4>
        </div>
      </div>
    </div>
  );
}

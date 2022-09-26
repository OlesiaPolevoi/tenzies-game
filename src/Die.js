import React from "react";
import "./Die.css";
export default function Die(props) {
  return (
    <div className="die-face">
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

// const styles = {
//   backgroundColor: props.held ? "#59E391" : "white",
// };
// return (
//   <div className="die-face" onClick={props.hold} style={styles}>
//     <h2 className="die-num">{props.value}</h2>
//   </div>
// );

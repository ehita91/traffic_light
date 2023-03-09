import { useState } from "react";

export default function TrafficLight() {

  const[color, setColor] = useState("");

  return (
    <div className="bg-container">
      <div className="bg-pole"></div>
      <div className="bg-trafficlight">
        <div className={"light red" + (color === "red" ? " onred" : "" )} onClick={() => {setColor("red")}}></div>
        <div className={"light yellow" + (color === "yellow" ? " onyellow" : "" )} onClick={() => {setColor("yellow")}} ></div>
        <div className={"light green" + (color === "green" ? " ongreen" : "" )} onClick={() => {setColor("green")}}></div>
      </div>
    </div>
  );
}

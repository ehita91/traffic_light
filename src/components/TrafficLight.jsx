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
      {color === "green" && <audio autoPlay><source src="/car-horn-6408.mp3" type="audio/mpeg"></source></audio>}
      {color === "green" && <audio autoPlay><source src="/RoverStartIdleOff PE726902.mp3" type="audio/mpeg"></source></audio>}
      {color === "red" && <audio autoPlay><source src="/CarChaseHitBrakesS PE878601.mp3" type="audio/mpeg"></source></audio>}
    </div>
  );
}

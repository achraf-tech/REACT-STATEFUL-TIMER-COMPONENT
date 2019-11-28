import React from "react";

export default function Test(props) {
  let t = props.t;
  let h = parseInt(t / 3600000);
  let m = parseInt((t % 3600000) / 60000);
  let s = parseInt(((t % 3600000) % 60000) / 1000);

  return (
    <div className="time-1">
      <h1>
        {h.toString().padStart(2, 0) +
          ":" +
          m.toString().padStart(2, 0) +
          ":" +
          s.toString().padStart(2, 0)}
      </h1>
      <div className="clock">
        <h4>Hour</h4>
        <h4>Muinte</h4>
        <h4>Second</h4>
        </div>
   
    </div>
  );
}

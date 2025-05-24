import React, { useState, useEffect }from "react";

const TrafficLight = () => {
    const [ color, setColor ] = useState("");

    function checker (selectedColor) {
        setColor(selectedColor);
    }

    return (
        <div id="traffic-background" className="d-flex flex-column justify-content-center align-items-center">
            <div id="green-light" className={`mb-3  ${color === "green" ? "glow-box" : ""}`} onClick={() => checker("green")}></div>
            <div id="yellow-light" className={` ${color === "yellow" ? "glow-box" : ""}`} onClick={() => checker("yellow")}></div>
            <div id="red-light" className={`mt-3 ${color === "red" ? "glow-box" : ""}`} onClick={() => checker("red")}></div>
        </div>
    )
};

export default TrafficLight;
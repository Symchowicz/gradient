import React, {Component, useState, useEffect} from "react";


export default function Html(){
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(50);
    const [third, setThird] = useState(100);
    const [rotation, setRotation] = useState(180)
    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#000000");
    const [thirdColor, setThirdColor] = useState("#000000");

    function resetColor(){
        let element = document.getElementById("gradient");
        element.style.background = "linear-gradient(" + rotation + "turn, " + firstColor + " " + first + "%, " + secondColor + " " + second +  "%, " + thirdColor + " " + third + "% )";

    }

    function reset(){
        setFirst(document.getElementById("first").value)
        setSecond(document.getElementById("second").value)
        setThird(document.getElementById("third").value)
        setRotation(document.getElementById("rotation").value)
        setFirstColor(document.getElementById("firstColor").value)
        setSecondColor(document.getElementById("secondColor").value)
        setThirdColor(document.getElementById("thirdColor").value)
        resetColor()
    }

    return (
        <div>
            <div>
                <input type="number" id="first" name="first" min="0" max="100" defaultValue="0"  onChange={() => reset()}></input>
                <input type="color" id="firstColor" defaultValue={firstColor} onChange={() => reset()} ></input>
            </div>
            <div>
                <input type="number" id="second" name="second" min="0" max="100" defaultValue="50" onChange={() => reset()}></input>
                <input type="color" id="secondColor" onChange={() => reset()}></input>
            </div>
            <div>
                <input type="number" id="third" name="third" min="0" max="100" defaultValue="100" onChange={() => reset()}></input>
                <input type="color" id="thirdColor" onChange={() => reset()}></input>
            </div>
            <div>
                <input type="range" id="rotation" name="rotation" min="0" max="1" defaultValue="0.5" step="0.01"  onChange={() => reset()}></input>
            </div>

            <div id="gradient" style={{height: "200px"}}>
                
            </div>
        </div>
    )
}

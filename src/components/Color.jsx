import { useEffect, useState } from "react"
import './Color.css'


export default function Color() {

    const [typeOfColor, setTypeOfColor] = useState("hax");
    const [randomColor, getRandomColor] = useState("#000000");


    function colorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function createHaxClor() {
        let hax = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let haxColor = "#";

        for (let i = 0; i < 6; i++) {
            haxColor = haxColor + hax[colorUtility(hax.length)]

            console.log(haxColor)

        }
        getRandomColor(haxColor);




    }

    useEffect(()=>{

    })

    function createRgbColor() {


        let r = colorUtility(256);
        let g = colorUtility(256);
        let b = colorUtility(256);

        getRandomColor(`rgb(${r},${g},${b})`)



    }
    return (
        <body style={{
            backgroundColor: randomColor,
            height: "100vh",
            width: "100vw"
        }}

        >

            <div>
                <button className={typeOfColor === "hax"? "btnActive" : "btn"} onClick={() => setTypeOfColor("hax")}>Create HAX Color</button>
                <button className={typeOfColor === "rgb"? "btnActive" : "btn"} onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
                <button  className = "btn"  onClick={typeOfColor === "hax" ? createHaxClor : createRgbColor }>Create</button>

                <div className="container"
                    style={{
                        color: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",


                    }}

                >
                    <h1>{typeOfColor}</h1>
                    <p>{randomColor}</p>


                </div>
            </div>

        </body>
    )
}
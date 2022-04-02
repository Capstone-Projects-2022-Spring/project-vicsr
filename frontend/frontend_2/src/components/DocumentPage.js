import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useEffect, useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import {Image} from "react-bootstrap";

export default function DocumentPage(props){

    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState();
    const [backgroundImage, setBgImage] = useState();

    useEffect(() => {
        setBgImage(props.URL)
        }, [props.URL]);

    function saveData() {
        console.log("hello")
        const base64 = canvasRef.current.getDataURL(".png", true, "grey")
        const points = canvasRef.current.getSaveData()
        setDrawing(base64)
        console.log(base64)
        console.log(points)

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col align-self-start">
                    {/* The 80 at the end of the hex code sets the transparency*/}
                    <CanvasDraw ref={canvasRef} enablePanAndZoom = {false} clampLinesToDocument={true} imgSrc={props.URL} canvasHeight={800} canvasWidth={600} brushColor={"#FFFF0080"} catenaryColor={"#FFFF0080"}/>
                    <Button onClick={() => saveData()}>Save</Button>
                </div>
                <div className="col align-self-end">
                    <Image src={drawing}></Image>
                </div>
            </div>
        </div>
    )
}
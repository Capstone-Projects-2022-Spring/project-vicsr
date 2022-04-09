import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useEffect} from "react";

export default function DocumentPage(props){

    useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        }, [props.URL]);

    return(
        <div>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw enablePanAndZoom = {false} clampLinesToDocument={true} imgSrc={props.URL} canvasHeight={633} canvasWidth={489} brushColor={"#FFFF0080"} catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
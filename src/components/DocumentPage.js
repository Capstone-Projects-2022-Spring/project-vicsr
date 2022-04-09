import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useEffect, useRef} from "react";

export default function DocumentPage(props){
    const canvas = useRef(null)

    //this will happen every page click and doc choose.
    useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        console.log("Highlighting: " + props.highlighting)
        if(props.highlighting != null){
            canvas.current.loadSaveData(props.highlighting)
        }
        else{
            canvas.current.eraseAll()
        }
        }, [props.URL, props.highlighting]);

    return(
        <div>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw ref={canvas} enablePanAndZoom = {false} clampLinesToDocument={true} saveData={props.highlighting} imgSrc={props.URL} canvasHeight={1123} canvasWidth={794} brushColor={"#FFFF0080"} catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
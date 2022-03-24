import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'

export default function DocumentPage(props){
    return(
        <div>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw enablePanAndZoom = {false} clampLinesToDocument={true} imgSrc={ExampleImage} canvasHeight={800} canvasWidth={500} brushColor={"#FFFF0080"} catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useEffect, useRef, useState} from "react";
import {API_URL} from "../config";

export default function DocumentPage(props){

    let [highlight, setHighlight] = useState(null)

    const canvas = useRef(null)

    //this function is passed as a property to the CanvasDraw component, which will be called every time the canvas is updated in some way
    //this means new background image, new highlight, etc will fire this func
    async function saveHighlightToServer(event, lowLevelDocumentId){
        //console.log(event)
        if(props.URL === ""){
            console.log("no page, not attempting save")
        }
        else{
            console.log("attempting save")
            //get highlight from current view and send to backend to save
            let highlightData = canvas.current.getSaveData()
            //console.log("save length is: " + highlightData.length)
            //console.log(typeof highlightData)
            let studySet;

            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Token " + sessionStorage.getItem('token'))

            let formdata = new FormData();
            formdata.append("highlight", highlightData)

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            }

            try{
                let saveHighlight = API_URL + "/api/files/update/" + lowLevelDocumentId
                const response = await fetch(saveHighlight, requestOptions);
                props.setNeedHighlight(true)
                props.setNeedVocab(true)
                studySet = response
                console.log(studySet)
            }catch (error){
                console.error(error)
            }
        }

    }

    //this will happen every page click and doc choose.
    let instanceCount = 0
    useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        //console.log("Highlighting: " + props.highlighting)
        //console.log(canvas.current)

        //props.highlighting is declared as null originally, and a document which has never tried to save highlight data will always
        //be listed as "" in the database. If neither of these cases are true, then we can load valid highlight data
        //per the CanvasDraw component and should try to do so
        if(props.highlighting != null && props.highlighting !== ""){
            console.log("loading highlight from props")
            console.log("highlight length in useEffect is: " + props.highlighting.length)
            setHighlight(props.highlighting)
        }
        //no highlight
        else{
            console.log("erasing all highlight")
            canvas.current.eraseAll()
        }
        instanceCount +=1
        //console.log(instanceCount)
        return() =>{
            instanceCount -=1
            canvas.current.eraseAll()
            console.log(instanceCount)
        }


        }, [props.URL, props.highlighting]);

    return(
        <div onMouseUp={(event) => saveHighlightToServer(event, props.currentPageID)}>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw
                ref={canvas} 
                enablePanAndZoom = {false}
                clampLinesToDocument={true}  
                saveData={highlight}
                immediateLoading
                imgSrc={props.URL} 
                canvasHeight={1123} 
                canvasWidth={794}
                brushColor={"#FFFF0080"}
                catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
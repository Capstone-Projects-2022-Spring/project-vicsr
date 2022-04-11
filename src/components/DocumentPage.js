import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useEffect, useRef, useState} from "react";
import {API_URL} from "../config";

export default function DocumentPage(props){
    const canvas = useRef(null)

    async function saveHighlightToServer(lowLevelDocumentId){
        if(props.URL === ""){
            console.log("no page, not attempting save")
        }
        else{
            console.log("attempting save")
            //get highlight from current view and send to backend to save
            let highlightData = canvas.current.getSaveData()
            console.log(highlightData)
            console.log(typeof highlightData)
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
                //COMMENTED OUT SO IT DOESNT DDOS THE BACKEND
                //const response = await fetch(saveHighlight, requestOptions);
                //studySet = response
                //console.log(studySet)
            }catch (error){
                console.error(error)
            }
        }

    }

    let [currentHighlight, setCurrentHighlight] = useState(null)
    //this will happen every page click and doc choose.
    useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        //console.log("Highlighting: " + props.highlighting)


        if(props.highlighting != null && props.highlighting !== ""){
            canvas.current.loadSaveData(props.highlighting)
        }
        else{
            console.log("erasing all highlight")
            canvas.current.eraseAll()
        }
        }, [props.URL]);

    return(
        <div>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw ref={canvas} onChange={(event) => saveHighlightToServer(props.currentPageID)} enablePanAndZoom = {false} clampLinesToDocument={true}  saveData={currentHighlight} imgSrc={props.URL} canvasHeight={1123} canvasWidth={794} brushColor={"#FFFF0080"} catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
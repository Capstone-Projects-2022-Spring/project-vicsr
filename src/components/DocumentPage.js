import CanvasDraw from "react-canvas-draw";
import ExampleImage from '../assets/Screen Shot 2022-03-24 at 1.05.06 PM.png'
import {useCallback, useEffect, useRef, useState} from "react";
import {API_URL} from "../config";
import LZString from "lz-string"

export default function DocumentPage(props){

    let [highLight, setHighlight] = useState(null)

    const canvas = useRef(null)

    const canvasHighlight = useCallback(node =>{
        if(node != null){
            setHighlight(node.getSaveData())
        }

    }, []);

    //this function is passed as a property to the CanvasDraw component, which will be called every time the canvas is updated in some way
    //this means new background image, new highlight, etc will fire this func
    async function saveHighlightToServer(lowLevelDocumentId){
        if(props.URL === ""){
            console.log("no page, not attempting save")
        }
        else if(LZString.decompressFromUTF16(props.highlighting) == canvas.current.getSaveData()){
            console.log("no change, not attempting save")
        }
        else{
            console.log("attempting save")
            //get highlight from current view and send to backend to save
            let highlightData = canvas.current.getSaveData()
            let compressedHighlight = LZString.compressToUTF16(highlightData);
            console.log(highlightData)
            console.log(compressedHighlight)
            //console.log(typeof highlightData)
            let studySet;

            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Token " + sessionStorage.getItem('token'))

            let formdata = new FormData();
            formdata.append("highlight", compressedHighlight)

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            }

            try{
                let saveHighlight = API_URL + "/api/files/update/" + lowLevelDocumentId
                //COMMENTED OUT SO IT DOESNT DDOS THE BACKEND
                const response = await fetch(saveHighlight, requestOptions);
                props.callNewHighlight(true)
                studySet = response
                console.log(studySet)
                setHighlight(canvas.current.getSaveData())
            }catch (error){
                console.error(error)
            }
        }

    }

    //this will happen every page click and doc choose.
    useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        //console.log("Highlighting: " + props.highlighting)

        //props.highlighting is declared as null originally, and a document which has never tried to save highlight data will always
        //be listed as "" in the database. If neither of these cases are true, then we can load valid highlight data
        //per the CanvasDraw component and should try to do so
        if(props.highlighting != null){
            let decompressed = LZString.decompressFromUTF16(props.highlighting);
            console.log(decompressed)
            canvas.current.loadSaveData(decompressed, true)
        }
        //no highlight
        else{
            console.log("erasing all highlight")
            //canvas.current.eraseAll()
        }
        }, [props.URL, props.highlighting]);

    return(
        <div>
            {/* The 80 at the end of the hex code sets the transparency*/}
            <CanvasDraw
                ref={canvas}
                onChange={(event) => saveHighlightToServer(props.currentPageID)} 
                enablePanAndZoom = {false}
                clampLinesToDocument={true}  
                saveData={highLight}
                imgSrc={props.URL} 
                canvasHeight={1123} 
                canvasWidth={794}
                brushColor={"#FFFF0080"}
                catenaryColor={"#FFFF0080"}/>
        </div>
    )
}
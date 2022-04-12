import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../../config.js'
import FlashcardList from "./FlashcardList";
import DocumentList from "../../../sidebars/DocumentList/DocumentList";

function FlashcardListLoader(props){
    let [data, setData] = useState({studySetFromServer:[], numDesks:0, isFetching: false})

    function deskPicker(topLevelID, urls){
        props.chooseDesk(topLevelID, urls);
    }

    useEffect( () =>{
        async function fetchDecks() {
            try {
                setData({studySetFromServer: data.studySetFromServer, numDesks:data.numDesks, isFetching: false})
                let vocabSetGetDeskAPIstring = API_URL + "/api/vocab/sets/"
                const response = await fetch(vocabSetGetDeskAPIstring, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Token " + sessionStorage.getItem('token')
                    },
                });
                const docs = await response.json();
                setData({studySetFromServer: docs, numDesks:docs.length, isFetching: false})
            } catch (error) {
                console.error(error);
                setData({studySetFromServer: data.studySetFromServer, numDesks:data.numDesks, isFetching: false})
            }
        }
        //console.log(data.studySetFromServer)
        fetchDecks()
        //console.log("Done fetching studyset")

        }, []);


    return(
        <FlashcardList studysets = {data.studySetFromServer} numberOfDesks = {data.numDesks} isLoading ={data.isFetching} chooseStudySet  = {deskPicker}/>
    )
}

export default FlashcardListLoader
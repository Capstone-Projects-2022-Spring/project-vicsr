import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../../config.js'
import FlashcardList from "./FlashcardList";

function FlashcardListLoader(props){
    let [data, setData] = useState({docsFromServer:[], numDocs:0, isFetching: false})

    function deckPicker(topLevelID, urls){
        props.chooseDesk(topLevelID, urls);
    }

    /*
    useEffect( () =>{
        async function fetchDecks() {
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: true})
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
            //do flashacrd deck loading logic
        }*/

        useEffect( () =>{
        async function fetchDecks() {
            try {
                setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: true})
                let vocabSetGetDeskAPIstring = API_URL + "/api/vocab/sets/"
                const response = await fetch(vocabSetGetDeskAPIstring, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Token " + sessionStorage.getItem('token')
                    },
                });
                const docs = await response.json();
                setData({docsFromServer: docs, numDocs:docs.length, isFetching: false})
            } catch (error) {
                console.error(error);
                setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
            }
        }

        //console.log(data.studySetFromServer)
        fetchDecks()
        //console.log("Done fetching studyset")

        }, []);


    return(
        <FlashcardList documents = {data.docsFromServer} numberOfDocs = {data.numDocs} isLoading ={data.isFetching} chooseStudySet = {deckPicker}/>
    )
}

export default FlashcardListLoader